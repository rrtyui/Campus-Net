const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../pg-db');

const Student = sequelize.define(
    'Student',
    {
      // Model attributes are defined here
      student_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      student_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      },
      student_last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      student_email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      student_password: {
        type: DataTypes.STRING(100),
      }
    }
);

module.exports = Student;