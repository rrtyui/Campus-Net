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

async function deleteStudent(name, email) {
  try {
    const existingStudent = await Student.findOne({
      where: {
        name: name,
        email: email,
      }
    });
    if (!existingStudent) {
      throw new Error(`No user found with name "${name}" and email "${email}"`);
    }
    const Result_count = await Student.collection('students').deleteOne({ name, email});
    if (Result_count.deletedCount === 0) {
      throw new Error(`Could not delete user with name "${name}" and email "${email}"`);
    }

    return `Successfully deleted user with name "${name}" and email "${email}"`;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

async function updateStudent(name, email, newData) {
  try {
    const existingStudent = await Student.collection('students').findOne({ name, email});
    if (!existingStudent) {
      throw new Error('No Student Found');
    }
    const Result_count = await Student.collection('students').updateOne({name, email},{$set: newData});
    if (Result_count === 0) {
      throw new Error('Could not update Student');
    }
    return `Successfully updated Student`;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

 console.log(process.env); // see env variables
 createStudent("jacinto", "Dome", "campeo@gmail.com", "culo2000")