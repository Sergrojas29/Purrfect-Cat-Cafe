
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Cat = require('./Cat')

class CatDates extends Model {}

CatDates.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      date: {
        type: DataTypes.DATE
      },
      // Other columns...
      cat_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Cat, // This refers to the Cat model
          key: 'id', // This refers to the primary key 'id' in the Cat model
        },
      },
    },
    {
      sequelize,
      modelName: 'cat_dates',
      timestamps: false,
    }
  );
  

module.exports = CatDates;