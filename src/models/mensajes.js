const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return mensajes.init(sequelize, DataTypes);
}

class mensajes extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    msj_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    msj_emisor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'alumno',
        key: 'alu_id'
      }
    },
    msj_receptor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'alumno',
        key: 'alu_id'
      }
    },
    msj_message: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    msj_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mensajes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "msj_id" },
        ]
      },
      {
        name: "msj_emisor",
        using: "BTREE",
        fields: [
          { name: "msj_emisor" },
        ]
      },
      {
        name: "msj_receptor",
        using: "BTREE",
        fields: [
          { name: "msj_receptor" },
        ]
      },
    ]
  });
  }
}
