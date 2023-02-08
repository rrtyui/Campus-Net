const { Sequelize, Dataypes, Models } = require('sequelize');
const { sequelize } = require('../pg-db')

const Note = sequelize.define(
    'Note',
    {
        note_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        note: {
            type: Dataypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    }
);

module.exports = Note;