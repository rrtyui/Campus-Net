const { Sequelize, Dataypes, Models } = require('sequelize');
const { sequelize } = require('../db');

const Attendance = sequelize.define(
    'Attendance',
    {
        // Model attributes are defined here
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        Attendance: {
            type: Dataypes.TINYINT,
            allowNull: false,
        }
    }
);

module.exports = Attendance;