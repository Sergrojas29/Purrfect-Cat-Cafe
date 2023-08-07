const Cat = require('./Cat')
const User = require('./User')
const CatDates = require('./CatDates')

User.belongsTo(Cat, {
    foreignKey: 'cat_id'
})
Cat.hasMany(CatDates, {
    foreignKey: 'cat_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  CatDates.belongsTo(Cat, {
    foreignKey: 'cat_id',
  });


module.exports = {
    Cat,
    CatDates,
    User
}