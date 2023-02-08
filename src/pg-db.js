const {Pool} = require('pg');
const {db} = require('./config');
const pool = new Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    db: db.database,
})

module.exports = pool;