const { carrera } = require("../models");
require("dotenv").config();

class careerServices {
  static async getAll() {
    try {
      const result = await carrera.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getOne(id) {
    try {
      const result = await carrera.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = careerServices;
