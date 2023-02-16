const mysql = require('mysql2');
const { db } = require('./config'); // database connection variables
const { Sequelize } = require('sequelize');

const dbconnect = mysql.createPool ({
    user: process.env.DB_USER, // process.env contains variables for the databaseconnection
    password: process.env.DB_PASSWORD,
    host: db.host,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

module.exports = { dbconnect: dbconnect, sequelize: sequelize };
