const { Sequelize, Dataypes, Models } = require('sequelize');
const { sequelize } = require('../pg-db')

const Sp_Resource = sequelize.define(
    'Sp_Resource',
    {
        sp_resource_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        resource_name: {
          type: Dataypes.STRING(256),
          allowNull: false,
        }
    }
);

module.exports = Sp_Resource;