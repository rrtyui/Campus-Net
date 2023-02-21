// contiene rutas a la que nuestro servidor puede responder
const routeProfessors = require("express").Router();

// functions to apply to routers (controllers)
const { createProfessor } = require("../controllers/professors");
const { createCourse, getCourse, getCourseStudents } = require("../controllers/courses");
const { addStudentsToCourse } = require('../controllers/course_assignment');
const { findStudent, findAllStudents } = require("../controllers/students");

// defining routes handlers for the /professors path
routeProfessors.post('/register', createProfessor);
routeProfessors.post('/courses/create', createCourse); // professor creates (POST) course
routeProfessors.post('/courses/modify', addStudentsToCourse)
routeProfessors.get('/courses/see', getCourseStudents);
routeProfessors.get('/students/all/see', findStudent); // see a particular student example: "localhost:3000/professors/students/all/see?StudentId=4"
routeProfessors.get('/students/all', findAllStudents); // see all students

module.exports = routeProfessors;