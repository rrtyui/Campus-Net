const {Pool} = require('pg');
const {db} = require('./config');
const { Sequelize } = require('sequelize');

const pool = new Pool ({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    db: db.database,
})

const sequelize = new Sequelize(
    db.database,
    db.user,
    db.password,
    {
        host: db.host,
        dialect: 'postgres',
    }
);

module.exports = { pool, sequelize }
