const { Sequelize, DataTypes, Models } = require('sequelize');
const { sequelize } = require('../db')

const Course = sequelize.define(
    'Course',
    {
        // Model attributes are defined here
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }
);

module.exports = Course;