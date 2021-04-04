const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});

module.exports = User;
