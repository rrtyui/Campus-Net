const Profesor = require('../models/professors');

async function createProfessor(name, lastname, email, password) {
  const profesor = await Profesor.create({ 
    first_name : name,
    last_name: lastname,
    email: email,
    password: password, 
  });
  console.log(`Professor created:`, profesor.toJSON());
}

// console.log(process.env); // see env variables
createProfessor("Alastor", "Moody", "buzzyogurtlight@gmail.com", "macklemore");