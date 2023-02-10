const mysql = require('mysql');
const { db } = require('./config');
const { Sequelize } = require('sequelize');

const pool = mysql.createPool ({
    user: db.user, // process.env contains variables for the databaseconnection
    password: db.password,
    host: db.host,
    database: db.database,
    port: db.port
})

const sequelize = new Sequelize(
    db.database,
    db.user,
    db.password,
    {
        host: db.host,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

module.exports = { pool: pool, sequelize: sequelize };
