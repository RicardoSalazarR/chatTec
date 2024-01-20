const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return item.init(sequelize, DataTypes);
}

class item extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    item_titulo: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    item_categoria: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    item_descripcion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    item_disponible: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    item_alumno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'alumno',
        key: 'alu_id'
      }
    }
  }, {
    sequelize,
    tableName: 'item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
      {
        name: "item_alumno",
        using: "BTREE",
        fields: [
          { name: "item_alumno" },
        ]
      },
    ]
  });
  }
}
