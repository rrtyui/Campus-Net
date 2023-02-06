const createUser = require('./createUser');
const assert = require('assert');

const result1 = createUser('John Doe', 'johndoe@example.com', 'password123');
assert.deepEqual(result1, { user: { name: 'John Doe', email: 'johndoe@example.com', password: 'password123' } });

const result2 = createUser('Jane Doe', 'johndoe@example.com', 'password456');
assert.deepEqual(result2, { error: 'Email or name is already in use.' });

const result3 = createUser('Jane Doe', 'janedoe@example.com');
assert.deepEqual(result3, { error: 'Name, email, and password are required.' });