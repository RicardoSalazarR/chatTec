const careerServices = require("../services/career.service");

const getAll = async (req, res, next) => {
  try {
    const result = await careerServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const getByPk = async (req, res, next) => {
  try {
    const {id} = req.params
    const result = await careerServices.getOne(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAll,
  getByPk,
};
