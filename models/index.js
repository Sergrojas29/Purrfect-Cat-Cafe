const Cat = require('./Cat')
const User = require('./User')

Cat.belongsTo(User, {
    foreignKey: 'cat_id'
})

module.exports = {
    Cat,
    User
}