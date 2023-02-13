const { Sequelize, DataTypes, Models } = require('sequelize');
const { sequelize } = require('../db');

const Grade = sequelize.define(
    'Grade',
    {
        // Model attributes are defined here
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        grade: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }
);

module.exports = Grade;