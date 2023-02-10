// simple databse connection test
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: '172.17.0.2', // be careful with dynamic container's IP assignation, use docker inspect for that
  port: '3306',
  user: 'root',
  password: 'mysql2023',
});

connection.connect((err) => {
  if (err) {
    console.log('error happened: ' + err);
  } else {
    console.log('connection succesful');
  }
});

