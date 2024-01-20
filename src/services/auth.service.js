const {alumno} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthServices {
  static async register(user) {
    try {
      const result = await alumno.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async login(credentials) {
    try {
      const { email, password } = credentials;
      const user = await alumno.findOne({ where: { alu_email:email } });
      if (user) {
        const isValid = bcrypt.compareSync(password, user.alu_contrasena);
        return isValid ? { isValid, user } : { isValid, error: "password" };
      }
      return { isValid: false, error: "email" };
    } catch (error) {
      throw error;
    }
  }
  static genToken(data) {
    try {
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: "1h",
        algorithm: "HS512",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
