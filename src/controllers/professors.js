const Profesor = require('../models/professors');

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
      throw new Error('Email or Name already in use');
    }

    const profesor = await Profesor.create({
      first_name : first_name,
      last_name: last_name,
      email: email,
      password: password,
    });

    console.log(`Profesor created:`, profesor.toJSON());

    return res
        .status(200)
        .json({
          state: "Registered",
          id: profesor.id,
          username: profesor.first_name,
        });

  } catch (error) {
    console.error('An Error has ocurred: ' + error);
  }
}

async function deleteProfesor(name, email) {
  try {
    const existingProfesor = await Profesor.findOne({
      where: {
        name: name,
        email: email,
      }
    });
    if (!existingProfesor) {
      throw new Error(`No user found with name "${name}" and email "${email}"`);
    }
    const Result_count = await Profesor.collection('profesors').deleteOne({ name, email});
    if (Result_count.deletedCount === 0) {
      throw new Error(`Could not delete user with name "${name}" and email "${email}"`);
    }

    return `Successfully deleted user with name "${name}" and email "${email}"`;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

async function updateProfesor(name, email, newData) {
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
}


// console.log(process.env); // see env variables
createProfessor("Alastor", "Moody", "buzzyogurtlight@gmail.com", "macklemore");