const { item, images, alumno } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class itemsServices {
  static async getAll() {
    try {
      const result = await item.findAll({
        include: [
          {
            model: images,
            as: "images",
            attributes: ["img_url"],
          },
          {
            model: alumno,
            as: "datos_alumno",
            attributes: [
              "alu_nombre",
              "alu_apellido",
              "alu_email",
              "alu_telefono",
              "alu_no_control",
              "alu_carrera",
            ],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAvailable() {
    try {
      const result = await item.findAll({
        where: {
          item_disponible: true,
        },
        include: {
          model: images,
          as: "images",
          attributes: ["img_url"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getOwn(userId) {
    try {
      const result = await item.findAll({
        where: {
          item_alumno: userId,
        },
        include: [
          {
            model: images,
            as: "images",
            attributes: ["img_url"],
          },
          {
            model: alumno,
            as: "datos_alumno",
            attributes: [
              "alu_nombre",
              "alu_apellido",
              "alu_email",
              "alu_telefono",
              "alu_no_control",
              "alu_carrera",
            ],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getOne(id) {
    try {
      const result = await item.findByPk(id, {
        include: [
          {
            model: images,
            as: "images",
            attributes: ["img_url"],
          },
          {
            model: alumno,
            as: "datos_alumno",
            attributes: [
              "alu_nombre",
              "alu_apellido",
              "alu_email",
              "alu_telefono",
              "alu_no_control",
              "alu_carrera",
            ]
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async postItem(item) {
    try {
      const result = await item.create(item);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = itemsServices;
