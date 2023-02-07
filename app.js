const express = require('express');
const app = express();
const { Client } = require('pg');

const client = new Client ({
    host: 'localhost',
    database:
})