const Sequelize = require('sequelize');
const {db} = require('./config');


async function checkConnection() {
  try {
    console.log(db.database, db.user, db.password)
    // Connect to the database
    const sequelize = new Sequelize(
        db.database,
        db.user,
        db.password,
        {
            host: db.host,
            dialect: 'postgres',
        }
    );

    // Test the connection
    await sequelize.authenticate();
    console.log('Connection to the database was successful.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

checkConnection();