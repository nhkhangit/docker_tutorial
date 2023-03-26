const Sequelize = require('sequelize');
const sequelize = require('./database');

const Account = sequelize.define('account', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
},{ tableName: 'account' ,timestamps: false});

module.exports = Account;
