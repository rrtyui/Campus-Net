const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Attendance = sequelize.define(
    'Attendance',
    {
        // Model attributes are defined here
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Attendance: {
            type: DataTypes.TINYINT,
            allowNull: false,
        }
    }
);

module.exports = Attendance;