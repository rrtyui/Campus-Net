const express = require('express');
const morgan = require('morgan');
const app = express();

// importing modular routes handlers from routes directory
const routeStudents = require('./routes/routesStudents');
const routeProfessors = require('./routes/routesProfessors');

// db connection and models/associations
const { sequelize } = require('./db');
// require('./models/associations');
// const Professor = require('./models/professors');
// const Student = require('./models/students');
// const Course = require('./models/courses');
// const Course_assignment = require('./models/course_assignment');
// const Grades = require('./models/grades');
// const Attendance = require('./models/attendance');
// const resources = require('./models/resources');

app.use(express.json()); // understand json
app.use(morgan('dev')); // watch requests on terminal

//config cors for allow cross origin resource sharing for origin localhost:3001 with credentials

// mounting router handlers; sets the base path for the router.
app.use('/students', routeStudents);
app.use('/professors', routeProfessors);

app.listen(3000, () => {
  sequelize.sync().then(() => {
    console.log("Connection to database successful");
  });
  console.log("Running on server with port 3000");
});