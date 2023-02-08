const { Sequelize, Dataypes, Models } = require('sequelize');
const { sequelize } = require('../pg-db')

const Asistance = sequelize.define(
    'Asistance',
    {
        asistance_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        asistance: {
            type: Dataypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    }
);

module.exports = Asistance;