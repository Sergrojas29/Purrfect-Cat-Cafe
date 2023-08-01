const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection');

class User extends Model {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password)
  // }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cat_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cat',
        key: 'id',
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newData) => {
        try {
          newData.password = await bcrypt.hash(newData.password, 10);
        } catch (err) {
          console.log(err);
        }
      },
      beforeBulkCreate: async (bulk) => {
        try {
          bulk.map( async (user) => {
            user.dataValues.password = await bcrypt.hash(user.dataValues.password, 10)
            return user.dataValues.password
          }
          )
        } catch (err) {
          console.log(err);
        }
      },
      beforeUpdate: async (update) => {
        try {
          update.password = await bcrypt.hash(update.password, 10);
        } catch (err) {
          console.log(err);
        }
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  },
);

module.exports = User;
