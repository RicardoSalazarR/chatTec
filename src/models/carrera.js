const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return carrera.init(sequelize, DataTypes);
}

class carrera extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    carr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    carr_nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'carrera',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "carr_id" },
        ]
      },
    ]
  });
  }
}
