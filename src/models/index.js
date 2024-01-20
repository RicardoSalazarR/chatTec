const db = require("../utils/database");
const initModels = require("./init-models");

const models = initModels(db);

const { alumno, carrera, images, item, lugar_entrega, mensajes, prestamo } =
  models;

module.exports = {
  alumno,
  carrera,
  images,
  item,
  lugar_entrega,
  mensajes,
  prestamo,
};
