const { User } = require('../models');
const bcrypt = require('bcrypt')

const userData = [
    {
        first_name: "Sergio",
        last_name: "Rojas",
        email: "someguy@gmail.com",
        password: "Password",
        cat_id: 6
    },
    {
        first_name: "Brendan",
        last_name: "Sikorjak",
        email: "thatguy@gmail.com",
        password: "not_password_1",
        cat_id: 4
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
