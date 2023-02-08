const { config } = require('dotenv');
config(); // config() method is called to load the environment variables from the .env file

module.exports = {
  db:{
    user: process.env.DB_USER, // process.env contains variables for the database connection
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
  }
}

