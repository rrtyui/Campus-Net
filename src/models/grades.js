const { Sequelize, Dataypes, Models } = require('sequelize');
const { sequelize } = require('../pg-db')

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
            type: Dataypes.FLOAT,
            allowNull: false,
        }
    }
);

module.exports = Grade;