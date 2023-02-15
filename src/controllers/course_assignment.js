const Course = require('../models/courses');
const Student = require('../models/students');
require('../models/associations');

// const courseId = req.query.CourseId // Extract the 'CourseId' query parameter

async function addStudentsToCourse(req, res) {
  const { studentsIds } = req.body; // student's ids array example: StudentsIds = [1, 2, 3]
  const courseId = req.query.CourseId; // Extract the 'CourseId' query parameter
  if (!studentsIds || !courseId ) {
    return res.status(400).json({
      state: "Error",
      error: "Bad Request - Missing data",
    });
  }

  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      throw new Error('Course provided is not found or doesn\'t exists');
    }

    const students = await Student.findAll({
      where: {
        id: studentsIds, // query will look like: SELECT * FROM students WHERE id IN (1, 2, 3, 4);
      },
    }); // If no rows match the conditions, the method will return an empty array.
    if(students.length === 0) {
      throw new Error('Students\'s ids weren\'t provided or don\'t match with current records ');
    }

    await course.addStudents(students); // many-to-many association method, inserts multiple values (CourseId, StudentId) into the CourseAssigment table 

    console.log(`Students have been added succesfully to course:`);

    return res
        .status(200)
        .json({
          state: "Course-Students assigment succesfully registered",
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

module.exports = { addStudentsToCourse };