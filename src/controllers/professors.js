const Profesor = require('../models/professors');
const bcrypt = require('bcrypt'); // for password enrcyptation

const createProfessor = async (req, res) => {
  const {first_name, last_name, email, password} = req.body;

  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({
      state: "Error",
      error: "Bad Request - Missing data",
    });
  }

  try {
    const existingProfesor = await Profesor.findOne({
      where: {
        email: email,
      }
    });
    if (existingProfesor) {
      throw new Error('Email already in use, please provide another one');
    }

    const securedPassword = await bcrypt.hash(password, 8);

    const newProfesor = await Profesor.create({
      first_name : first_name,
      last_name: last_name,
      email: email,
      password: securedPassword,
    });

    console.log(`Profesor created:`, newProfesor.toJSON());

    return res
        .status(201)
        .json({
          state: "Professor succesfully registered",
          id: newProfesor.id,
          professor_name: newProfesor.first_name + ' ' + newProfesor.last_name,
        });

  } catch (error) {
    console.error('An Error has ocurred: ' + error);
    
    return res
    .status(500)
    .json({
      state: "Error",
      error: error.message,
    });
  }
}


module.exports = { createProfessor };