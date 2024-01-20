const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return images.init(sequelize, DataTypes);
}

class images extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    img_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    img_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    img_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'item',
        key: 'item_id'
      }
    }
  }, {
    sequelize,
    tableName: 'images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "img_id" },
        ]
      },
      {
        name: "img_item_id",
        using: "BTREE",
        fields: [
          { name: "img_item_id" },
        ]
      },
    ]
  });
  }
}
