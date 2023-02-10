const { Sequelize, Dataypes, Models } = require('sequelize');
const { sequelize } = require('../pg-db')

const CourseAssigment = sequelize.define(
    'CourseAssigment',
    {
        // Model attributes are defined here
        course_assigm_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        }
    }, {
        // Model Options
        freezeTableName: true // Keep the model's name same as table
    }
);

module.exports = CourseAssigment;