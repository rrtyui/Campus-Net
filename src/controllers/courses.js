const { NOW } = require('sequelize');
const Course = require('../models/courses');
const Professor = require('../models/professors');
const Student = require('../models/students');
const { addStudentsToCourse } = require('./course_assignment');
require('../models/associations'); // for using createCourse association method, won't be recognized here otherwise

async function createCourse(req, res) {
  const { course_name, professor_id } = req.body;
  if (!course_name || !professor_id ) {
    return res.status(400).json({
      state: "Error",
      error: "Bad Request - Missing data",
    });
  }
  try {
    const professor = await Professor.findByPk(professor_id);
    if (!professor) {
      throw new Error('Professor\'s identity is not found or doesn\'t exists');
    }

    const newCourse = await professor.createCourse({
      name: course_name,
    }); // professor_id will be added automatically by the association made 

    console.log(`Course has been created in database:`, newCourse.toJSON());

    return res
        .status(201)
        .json({
          state: "Course succesfully registered",
          courseName: newCourse.name,
          course_professor: professor.first_name + ' ' + professor.last_name
        });

  } catch (error) {
    console.error('An Error has ocurred: ' + error); // for server-side

    return res // what the "client" sees
    .status(500)
    .json({
      state: "Error",
      error: error.message,
    });
  }
}

async function getCourseStudents(req, res) {
  const course_id = req.query.CourseId;

  if (!course_id) {
    return res.status(400).json({
      state: "Error",
      error: "Bad Request - Missing data",
    });
  }
  try {
    const course = await Course.findByPk(course_id);
    if (!course) {
      throw new Error('Course provided is not found or doesn\'t exists');
    }

    const students = await course.getStudents();
    if (!students) {
      throw new Error('Couldn\'t get students');
    }

    // take each name of the current element(student) from the array (students) and return it to the newly created array (studentNames)
    const studentNames = students.map((student) => student.fullName);

    return res
        .status(200)
        .json({
          state: "Course succesfully fetched",
          courseStudents: studentNames,
      });
  }
  catch (error) {
    console.error("An error has ocurred: " + error.message);

    return res // what the "client" sees
    .status(500)
    .json({
      state: "Error",
      error: error.message,
    });
  }
}

module.exports = { createCourse, getCourseStudents };