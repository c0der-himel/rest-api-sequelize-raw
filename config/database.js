const { Sequelize } = require('sequelize');

const db = new Sequelize('user', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = db;
