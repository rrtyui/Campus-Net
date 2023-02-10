// const { Pool } = require('pg');
const { db } = require('./config');
const { Sequelize } = require('sequelize');

const pool = new Pool ({
    user: process.env.DB_USER, // process.env contains variables for the databaseconnection
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        }
);

module.exports = { pool: pool, sequelize: sequelize };
