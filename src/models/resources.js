const { Sequelize, DataTypes, Models } = require('sequelize');
const { sequelize } = require('../db');

const Resource = sequelize.define(
    'Resource',
    {
        // Model attributes are defined here
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        path: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }
);

module.exports = Resource;