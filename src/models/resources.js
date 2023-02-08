const { Sequelize, Dataypes, Models } = require('sequelize');
const { sequelize } = require('../pg-db')

const Resource = sequelize.define(
    'Resource',
    {
        resource_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        resource_route: {
            type: Dataypes.STRING(528),
            allowNull: false,
        }
    }
);

module.exports = Resource;