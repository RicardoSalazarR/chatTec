const itemsServices = require("../services/items.service");

const getAll = async (req, res, next) => {
  try {
    const result = await itemsServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const getAvailable = async (req, res, next) => {
  try {
    const result = await itemsServices.getAvailable();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }}
const postItem = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await itemsServices.postItem(data);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const getOwn = async (req, res, next) => {
  try {
    const {userId} = req
    const result = await itemsServices.getOwn(userId)
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const getById = async (req,res,next)=>{
  try {
    const {id} = req.params
    const result = await itemsServices.getOne(id)
    const {
      item_id,
      item_titulo,
      item_categoria,
      item_descripcion,
      item_disponible,
      images,
      datos_alumno,
    } = result
    const {
      alu_nombre,
      alu_apellido,
      alu_email,
      alu_telefono,
      alu_no_control,
      alu_carrera,
    } = datos_alumno;
    const obj1 = {
      nombre: alu_nombre,
      apellido: alu_apellido,
      email: alu_email,
      telefono: alu_telefono,
      no_control: alu_no_control,
      carrera: alu_carrera,
    };
    const obj2 = {
      id: item_id,
      titulo: item_titulo,
      categoria: item_categoria,
      descripcion: item_descripcion,
      disponible: item_disponible,
      alumno: obj1,
      images,
    };
    res.status(200).json(obj2);
  } catch (error) {
    next(error)
  }
}
module.exports = {
  getAll,
  postItem,
  getOwn,
  getById,
  getAvailable
};
