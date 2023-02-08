const { Sequelize, Dataypes, Models } = require('sequelize');
const { sequelize } = require('../pg-db')

const Group = sequelize.define(
    'Group',
    {
        group_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        Subject: {
            type: Dataypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    }
);

module.exports = Group;