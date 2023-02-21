// contiene rutas a la que nuestro servidor puede responder
const routeProfessors = require("express").Router();

// functions to apply to routers (controllers)
const { createProfessor } = require("../controllers/professors");
const { createCourse, getCourse, getCourseStudents } = require("../controllers/courses");
const { addStudentsToCourse } = require('../controllers/course_assignment');
const { findStudent } = require("../controllers/students");

// defining routes handlers for the /professors path
routeProfessors.post('/register', createProfessor);
routeProfessors.post('/courses/create', createCourse); // professor creates (POST) course
routeProfessors.post('/courses/modify', addStudentsToCourse)
routeProfessors.get('/courses/see', getCourseStudents);
routeProfessors.get('/students/see', findStudent);

module.exports = routeProfessors;