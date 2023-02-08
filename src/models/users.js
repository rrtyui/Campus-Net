const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../pg-db');

const Users = sequelize.define(
    'Users',
    {
      // Model attributes are defined here
      user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      },
      user_last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      user_password: {
        type: DataTypes.STRING(256),
      },
      user_role_type: {
        type: DataTypes.TEXT(18),
        allowNull: false,
      }
    }
);

module.exports = Users;