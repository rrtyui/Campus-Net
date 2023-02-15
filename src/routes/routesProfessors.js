// contiene rutas a la que nuestro servidor puede responder
const routeProfessors = require("express").Router();

// functions to apply to routers (controllers)
const { createProfessor } = require("../controllers/professors");
const { createCourse } = require("../controllers/courses");

// defining routes handlers for the /professors path
routeProfessors.post('/register', createProfessor);
routeProfessors.post('/courses/create', createCourse); // professor creates (POST) course

module.exports = routeProfessors;