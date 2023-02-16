const { Sequelize, DataTypes, Models } = require('sequelize');
const { sequelize } = require('../db');

const Grade = sequelize.define(
    'Grade',
    {
        // Model attributes are defined here
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        grade: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }
);

module.exports = Grade;