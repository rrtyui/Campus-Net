const Profesor = require('../models/professors');

async function createProfessor(name, lastname, email, password) {
  try {
    const existingProfesor = await Profesor.findOne({
      where: {
        email: email,
        name: name,
      }
    });
    if (existingProfesor) {
      throw new Error('Email or Name already in use.');
    }
    const profesor = await Profesor.create({
      first_name : name,
      last_name: lastname,
      email: email,
      password: password,
    });
  console.log(`Professor created:`, profesor.toJSON());
  } catch (error) {
    console.log('An error has ocurred.')
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