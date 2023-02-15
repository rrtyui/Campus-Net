// contiene rutas a la que nuestro servidor puede responder
const routeProfessors = require("express").Router();

// functions to apply to routers (controllers)
const { createProfessor } = require("../controllers/professors");
const { createCourse } = require("../controllers/courses");
const { addStudentsToCourse } = require('../controllers/course_assignment');

// defining routes handlers for the /professors path
routeProfessors.post('/register', createProfessor);
routeProfessors.post('/courses/create', createCourse); // professor creates (POST) course
routeProfessors.post('/courses/modify', addStudentsToCourse)

module.exports = routeProfessors;