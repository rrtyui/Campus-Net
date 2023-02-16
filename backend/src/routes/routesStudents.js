// contiene rutas a la que nuestro servidor puede responder
const routeStudents = require("express").Router();

// functions to apply to routers (controllers)
const { createStudent, deleteStudent} = require("../controllers/students");

// defining routes handlers for the /students path
routeStudents.post('/register', createStudent);

module.exports = routeStudents;