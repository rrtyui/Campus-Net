const Student = require('../models/students');
const bcrypt = require('bcrypt'); // for password enrcyptation

const createStudent = async (req, res) => {
  const {first_name, last_name, email, password} = req.body;

  if (!first_name || !last_name || !email || !password) {
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

    const securedPassword = await bcrypt.hash(password, 8);

    const newStudent = await Student.create({
      first_name : first_name,
      last_name: last_name,
      email: email,
      password: securedPassword,
    });

    console.log(`Student created:`, newStudent.toJSON()); // server-side

    return res // client-side
        .status(201)
        .json({
          state: "Student succesfully registered",
          id: newStudent.id,
          student_name: newStudent.first_name + ' ' + newStudent.last_name,
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


module.exports = {createStudent};