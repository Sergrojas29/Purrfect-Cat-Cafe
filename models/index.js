const Cat = require('./Cat')
const User = require('./User')


User.belongsTo(Cat, {
    foreignKey: 'cat_id'
})



module.exports = {
    Cat,
    
    User
}