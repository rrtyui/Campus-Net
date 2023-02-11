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
// console.log(process.env); // see env variables
createProfessor("Alastor", "Moody", "buzzyogurtlight@gmail.com", "macklemore");