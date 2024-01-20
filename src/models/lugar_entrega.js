const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return lugar_entrega.init(sequelize, DataTypes);
}

class lugar_entrega extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    lugar_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lugar_referencia: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lugar_entrega',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lugar_id" },
        ]
      },
    ]
  });
  }
}
