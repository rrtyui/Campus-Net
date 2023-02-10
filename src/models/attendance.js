const { Sequelize, Dataypes, Models } = require('sequelize');
const { sequelize } = require('../pg-db')

const Attendance = sequelize.define(
    'Attendance',
    {
        // Model attributes are defined here
        Attendance_id: {
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