const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return alumno.init(sequelize, DataTypes);
}
const bcrypt = require("bcrypt");

class alumno extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    alu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    alu_nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    alu_apellido: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    alu_email: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    alu_contrasena: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    alu_telefono: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "alu_telefono"
    },
    alu_no_control: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    alu_carrera: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'carrera',
        key: 'carr_id'
      }
    }
  }, {
    hooks: {
      beforeCreate: (alumno, options) => {
        const { alu_contrasena } = alumno;
        const hash = bcrypt.hashSync(alu_contrasena, 10);
        alumno.alu_contrasena = hash;
      },
    },
    sequelize,
    tableName: 'alumno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "alu_id" },
        ]
      },
      {
        name: "alu_telefono",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "alu_telefono" },
        ]
      },
      {
        name: "alu_carrera",
        using: "BTREE",
        fields: [
          { name: "alu_carrera" },
        ]
      },
    ]
  });
  }
}
