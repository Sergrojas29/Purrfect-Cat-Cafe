const sequelize = require('../config/connection');
const seedCats = require('./catData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCats();

  await seedUsers();

  process.exit(0);
};

seedAll();