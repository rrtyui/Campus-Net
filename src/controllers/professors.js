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
        .status(200)
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

const deleteProfesor = async (re, res) => {
  const {first_name, last_name, email, password} = req.body;

  if (!first_name || !last_name || !email || !password) {
    return res.status(404).json({
      status: 'Error',
      error: 'Bad Request - Mising Data',
    });
  }
  try {
    const existingProfesor = await Profesor.findOne({
      where: {
        email: email,
      }
    });
    if (!existingProfesor){
      return res.status(404).json({
        status: 'Error',
        Error: 'Bad Request - Profesor does not exists'
      });
    }
    await Profesor.destroy();
    res.status(200).json({
      status: 'Error',
      Error: Error,
    });
  } catch (error) {
    res.status(404).json({
      status: 'Error',
      Error: Error,
    })
  }
};

/*async function updateProfesor(name, email, newData) {
  try {
    const existingProfesor = await Profesor.collection('profesor').findOne({ name, email});
    if (!existingProfesor) {
      throw new Error('No Profesor Found');
    }
    const Result_count = await Profesor.collection('profesor').updateOne({name, email},{$set: newData});
    if (Result_count === 0) {
      throw new Error('Could not update Profesor');
    }
    return `Successfully updated Profesor`;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}*/


module.exports = { createProfessor };