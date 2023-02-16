const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');

const Professor = sequelize.define(
    'Professor',
    {
      // Model attributes are defined here
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
      }
    }
);

module.exports = Professor;