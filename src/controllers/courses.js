const Course = require('../models/courses');
const Professor = require('../models/professors');
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

module.exports = { createCourse };