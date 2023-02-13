const { Sequelize, DataTypes, Models } = require('sequelize');
const { sequelize } = require('../db')

const Course = sequelize.define(
    'Course',
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
        }
    }
);

module.exports = Course;