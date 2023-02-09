const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../pg-db');

const Teacher = sequelize.define(
    'Teacher',
    {
      // Model attributes are defined here
      teacher_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      teacher_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      },
      teacher_last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      teacher_email: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      teacher_password: {
        type: DataTypes.STRING(256),
      }
    }
);

module.exports = Teacher;