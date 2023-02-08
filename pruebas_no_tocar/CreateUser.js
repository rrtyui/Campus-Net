const { Client } = require('pg');

const client = new Client ({
    user: 'postgres',
    host: 'localhost',
    database: 'Test_1',
    password: 'admin',
    port: 5432,
})

client.connect();

async function createUser (name, email, password) {
    if (!name || !email || !password) {
        return { error: 'Name, Email, and password are required.'};
    }

    const existingUser = await client.query('SELECT * FROM usuarios WHERE email = $1 OR name = $2', [email, name]);
    if (existingUser.rowCount !== 0) {
        return { error: 'Email or name is already in use.'};
    }

    const result = await client.query('INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password]);
    const user = result.rows[0];
    return { user };
}

module.exports = createUser;