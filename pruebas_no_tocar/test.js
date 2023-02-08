const createUser = require('./createUser');

(async () => {
    const newUser = await createUser('joaquin', 'joacod@example.com', 'password123');
    if (newUser.error) {
        console.error(newUser.error);
    } else {
        console.log('User created successfully:', newUser.user);
    }

    const duplicateUser = await createUser('John Doe', 'johndoe@example.com', 'password456');
    if (duplicateUser.error) {
        console.error(duplicateUser.error);
    } else {
        console.log('User created successfully:', duplicateUser.user);
    }

    const missingFieldsUser = await createUser('', '', '');
    if (missingFieldsUser.error) {
        console.error(missingFieldsUser.error);
    } else {
        console.log('User created successfully:', missingFieldsUser.user);
    }
})();
