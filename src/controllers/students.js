const Student = require('../models/students');
const { sequelize } = require('../pg-db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const { response } = require('express');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'mysql-server'
});

module.exports = router;

