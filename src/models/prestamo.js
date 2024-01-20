const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return prestamo.init(sequelize, DataTypes);
}

class prestamo extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    prest_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prest_fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    prest_lugar_de_entrega: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'lugar_entrega',
        key: 'lugar_id'
      }
    },
    prest_id_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'item',
        key: 'item_id'
      }
    },
    prest_alumno_receptor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'alumno',
        key: 'alu_id'
      }
    }
  }, {
    sequelize,
    tableName: 'prestamo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "prest_id" },
        ]
      },
      {
        name: "prest_id_item",
        using: "BTREE",
        fields: [
          { name: "prest_id_item" },
        ]
      },
      {
        name: "prest_lugar_de_entrega",
        using: "BTREE",
        fields: [
          { name: "prest_lugar_de_entrega" },
        ]
      },
      {
        name: "prest_alumno_receptor",
        using: "BTREE",
        fields: [
          { name: "prest_alumno_receptor" },
        ]
      },
    ]
  });
  }
}
