const Student = require('../models/students');

async function createStudent(name, lastname, email, password) {
  try {
    const existingStudent = await Student.findOne({
      where: {
        email: email,
        name: name,
      }
    });

  if (existingStudent) {
    throw new Error('Email or Name already in use');
  }
  const student = await Student.create({
    first_name : name,
    last_name: lastname,
    email: email,
    password: password,
  });
  console.log(`Student created:`, student.toJSON());
  } catch (error) {
    console.error('An Error has ocurred');
  }
}

 console.log(process.env); // see env variables
 createStudent("jacinto", "Dome", "campeo@gmail.com", "culo2000")