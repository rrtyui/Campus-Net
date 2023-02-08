const { Client } = require('pg');
const { db } = require('./config.js');

const client = new Client({
  user: db.user,
  password: db.password,
  host: db.host,
  database: db.database,
  port: db.port,
});

client.connect()
  .then(() => console.log('Connected to the database.'))
  .catch((error) => console.error(error));
console.log('dhdh');