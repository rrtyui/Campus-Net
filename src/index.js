const express = require('express');
const morgan = require('morgan');

const Routes = require('./routes/routes');
const app = express();

app.use(express.json()); //understand json
app.use(morgan('dev')); // allows watch requests on terminal
app.use(Routes); // using Routes module containing routes as middleware to app.use() method

const PORT = 4000; // modify port
app.listen(PORT);
console.log('Listening on port: ' + PORT);