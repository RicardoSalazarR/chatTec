const AuthServices = require("../services/auth.service");
const transporter = require("../utils/mailer");

const register = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      const { id } = result;
      res.status(201).json({ message: "user created" });
      await transporter.sendMail({
        from: "axel.111yo@gmail.com",
        to: result.email,
        subject: "Email confirmation",
        html: "<h1>Bienvenido a la app</h1> <p>Tienes que confirmar el email</p> <p>Solo haz clic en el siguiente <a href='#'' target='new_blank'> enlace </a></p>",
      });
    } else {
      next({ message: "something went wrong" });
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not email prooviided",
      });
    }
    if (!password) {
      return res.status(400).json({
        error: "Missing data",
        message: "Not password prooviided",
      });
    }
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { alu_nombre, alu_apellido, alu_email,alu_telefono,alu_no_control,alu_id } = result.user;
      const userData = { alu_nombre, alu_apellido, alu_email,alu_telefono,alu_no_control,alu_id  };
      const token = AuthServices.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else if (result.error === "password") {
      res.status(400).json({ message: "invalid password" });
    } else {
      res.status(400).json("user not found");
    }
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

module.exports = {
  register,
  login,
};
