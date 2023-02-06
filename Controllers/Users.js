const Users = []

function createUser (name, email, password) {
    if (!name || !email || !password) {
        return { error: 'Name, Email, and password are required.'};
    }

    const existingUser = user.find(user => user.email === email || user.name === name);
    if (existingUser) {
        return { error: 'Email or name is already in use.'};
    }

    const user = { name, email, password};
    users.push(user);
    return { user };
}

module.exports = createUser;