const { Sequelize, Dataypes, Models } = require('sequelize');
const { sequelize } = require('../pg-db')

const Inscription = sequelize.define(
    'Inscription',
    {
        Inscription_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        }
    }
);

module.exports = Inscription;