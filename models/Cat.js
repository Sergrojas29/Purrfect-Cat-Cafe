const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Cat extends Model {}

Cat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    size: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    affection: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    availability: {
      type: DataTypes.INTEGER,
    },
    picture: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'cat',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);



module.exports = Cat;
