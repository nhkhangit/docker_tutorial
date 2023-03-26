const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('docker_db_demo', 'root', 'mysql', {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
