const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../pg-db');

const Professor = sequelize.define(
    'Professor',
    {
      // Model attributes are defined here
      Professor_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      Professor_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      },
      Professor_last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      Professor_email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      Professor_password: {
        type: DataTypes.STRING(100),
      }
    }
);

module.exports = Professor;