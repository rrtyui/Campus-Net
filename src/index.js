const express = require('express');
const morgan = require('morgan');
const { sequelize } = require('./db');

// const Routes = require('./routes/routes');
const app = express();

app.use(express.json()); //understand json
app.use(morgan('dev')); // allows watch requests on terminal
// app.use(Routes);

app.get('/', (req, res) => {
  res.send("I can hear you");
});

app.use('/api/students', rout)

app.listen(3000, () => {
  sequelize.sync().then(() => {
    console.log("Bluouetot connected ersuxesfuly");
  });
  console.log("Walking bitch");
});