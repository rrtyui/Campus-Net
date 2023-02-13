// contiene rutas a la que nuestro servidor puede responder
const routeStudents = require("express").Router();

// functions to apply to routers (controllers)
const { createStudent } = require("../controllers/students");

// defining the routes for students (enrutadores)
routeStudents.post('/register', createStudent);

module.exports = routeStudents;