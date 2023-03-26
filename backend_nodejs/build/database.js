"use strict";

var Sequelize = require('sequelize');
var sequelize = new Sequelize('docker_db_demo', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql'
});
sequelize.authenticate().then(function () {
  console.log('Connection has been established successfully.');
})["catch"](function (err) {
  console.error('Unable to connect to the database:', err);
});
module.exports = sequelize;