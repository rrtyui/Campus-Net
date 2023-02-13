const express = require('express');
const morgan = require('morgan');
const app = express();

// importing routes from routes directory
const routeStudents = require('./routes/routesStudents');

// db connection and models/associations
const { sequelize } = require('./db');
require('./models/associations');
const Professor = require('./models/professors');
const Student = require('./models/students');
const Course = require('./models/courses');
const Course_assignment = require('./models/course_assignment');
const Grades = require('./models/grades');
const Attendance = require('./models/attendance');
const resources = require('./models/resources');

app.use(express.json()); // understand json
app.use(morgan('dev')); // watch requests on terminal

app.get('/', (req, res) => {
  res.send("I can hear you");
});

//config cors for allow cross origin resource sharing for origin localhost:3001 with credentials

// app.use(Routes);
app.use('/api/students', routeStudents);

app.listen(3000, () => {
  sequelize.sync().then(() => {
    console.log("Connectioan to database successful");
  });
  console.log("Running on server with port 3000");
});