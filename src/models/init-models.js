const DataTypes = require("sequelize").DataTypes;
const _alumno = require("./alumno");
const _carrera = require("./carrera");
const _images = require("./images");
const _item = require("./item");
const _lugar_entrega = require("./lugar_entrega");
const _mensajes = require("./mensajes");
const _prestamo = require("./prestamo");

function initModels(sequelize) {
  const alumno = _alumno(sequelize, DataTypes);
  const carrera = _carrera(sequelize, DataTypes);
  const images = _images(sequelize, DataTypes);
  const item = _item(sequelize, DataTypes);
  const lugar_entrega = _lugar_entrega(sequelize, DataTypes);
  const mensajes = _mensajes(sequelize, DataTypes);
  const prestamo = _prestamo(sequelize, DataTypes);

  item.belongsTo(alumno, { as: "datos_alumno", foreignKey: "item_alumno"});
  alumno.hasMany(item, { as: "items", foreignKey: "item_alumno"});
  mensajes.belongsTo(alumno, { as: "msj_emisor_alumno", foreignKey: "msj_emisor"});
  alumno.hasMany(mensajes, { as: "mensajes", foreignKey: "msj_emisor"});
  mensajes.belongsTo(alumno, { as: "msj_receptor_alumno", foreignKey: "msj_receptor"});
  alumno.hasMany(mensajes, { as: "msj_receptor_mensajes", foreignKey: "msj_receptor"});
  prestamo.belongsTo(alumno, { as: "prest_alumno_receptor_alumno", foreignKey: "prest_alumno_receptor"});
  alumno.hasMany(prestamo, { as: "prestamos", foreignKey: "prest_alumno_receptor"});
  alumno.belongsTo(carrera, { as: "alu_carrera_carrera", foreignKey: "alu_carrera"});
  carrera.hasMany(alumno, { as: "alumnos", foreignKey: "alu_carrera"});
  images.belongsTo(item, { as: "img_item", foreignKey: "img_item_id"});
  item.hasMany(images, { as: "images", foreignKey: "img_item_id"});
  prestamo.belongsTo(item, { as: "prest_id_item_item", foreignKey: "prest_id_item"});
  item.hasMany(prestamo, { as: "prestamos", foreignKey: "prest_id_item"});
  prestamo.belongsTo(lugar_entrega, { as: "prest_lugar_de_entrega_lugar_entrega", foreignKey: "prest_lugar_de_entrega"});
  lugar_entrega.hasMany(prestamo, { as: "prestamos", foreignKey: "prest_lugar_de_entrega"});

  return {
    alumno,
    carrera,
    images,
    item,
    lugar_entrega,
    mensajes,
    prestamo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
