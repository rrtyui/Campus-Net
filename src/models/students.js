const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db');  // database variables

const Student = sequelize.define(
    'Student',
    {
      // Model attributes are defined here
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
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

module.exports = Student;