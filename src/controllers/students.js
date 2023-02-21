const Student = require('../models/students');
const bcrypt = require('bcrypt'); // for password enrcyptation

const createStudent = async (req, res) => {
  const {name, email} = req.body;

  if (!name || !email) {
    return res.status(400).json({
      state: "Error",
      error: "Bad Request - Missing data",
    });
  }

  try {
    const existingStudent = await Student.findOne({
      where: {
        email: email,
      }
    });
    if (existingStudent) {
      throw new Error('Email already in use, please provide another one');
    }

    // const securedPassword = await bcrypt.hash(password, 8);

    const newStudent = await Student.create({
      first_name : name,
      email: email,
    });

    console.log(`Student created:`, newStudent.toJSON()); // server-side

    return res // client-side
        .status(201)
        .json({
          state: "Student succesfully registered",
          id: newStudent.id,
          name: newStudent.first_name,
          email: newStudent.email,
        });

  } catch (error) {
    console.error('An Error has ocurred: ' + error.message); // for server-side
  
    return res // what the "client" sees
    .status(500)
    .json({
      state: "Error",
      error: error.message,
    });
  }
}

const findStudent = async (req, res) => {
  const student_id = req.query.StudentId;
  if (!student_id) {
    return res.status(400).json({
      state: "Error",
      error: "Bad Request - Missing data",
    });
  }
  try {
    const studentFound = await Student.findByPk(student_id);
    if (!studentFound) {
      throw new Error('Student doesn\'t exists in records');
    }

    console.log(`Student has been found:`, studentFound.first_name);
    
    return res
    .status(201)
    .json({
      state: "Student has been found",
      name : studentFound.first_name,
      email: studentFound.email,
    });

  } catch (error) {
    console.error("An error has ocurred: " + error.message);

    return res.status(500).json({
      state: "Error",
      error: error.message,
    });
  }
}

const findAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.findAll();
    if (!allStudents) {
      throw new Error('No students where found');
    }

    const studentsdata = allStudents.map((student) => ({ name: student.first_name, email: student.email }));
    console.log(`Students have been found:`, studentsdata);
    
    return res
    .status(201)
    .json({
      state: "Students have been found",
      students : studentsdata,
    });

  } catch (error) {
    console.error("An error has ocurred: " + error.message);

    return res.status(500).json({
      state: "Error",
      error: error.message,
    });
  }
}

module.exports = {createStudent, findStudent, findAllStudents};