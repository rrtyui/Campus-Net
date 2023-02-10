const { Sequelize, Dataypes, Models } = require('sequelize');
const { sequelize } = require('../db');

const Resource = sequelize.define(
    'Resource',
    {
        // Model attributes are defined here
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        path: {
            type: Dataypes.TEXT,
            allowNull: false,
        }
    }
);

module.exports = Resource;