const { Sequelize, Dataypes, Models } = require('sequelize');
const { sequelize } = require('../db');

const CourseAssigment = sequelize.define(
    'CourseAssigment',
    {
        // Model attributes are defined here
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    }, {
        // Model Options
        freezeTableName: true // Keep the model's name same as table
    }
);

module.exports = CourseAssigment;