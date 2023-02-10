const Student = require('../models/students');

async function createStudent(name, lastname, email, password) {
  const student = await Student.create({ 
    first_name : name,
    last_name: lastname,
    email: email,
    password: password, 
  });
  console.log(`Student created:`, student.toJSON());
}

console.log(process.env); // see env variables
createStudent("jacinto", "Dome", "campeo@gmail.com", "culo2000");