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
        .status(200)
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

const deleteStudent = async (req, res) => {
  const {first_name, last_name, email, password} = req.body;

  if (!first_name || !last_name || !email || !password) {
    return res.status(404).json({
      status: 'Error',
      error: 'Bad Request - Mising Data',
    });
  }
  try {
    const existingStudent = await Student.findOne({
      where: {
        email: email,
      }
    });
    if (!existingStudent){
      return res.status(404).json({
        status: 'Error',
        Error: 'Bad Request - Students does not exists'
      });
    }
    await Student.destroy();
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

// const LogIn = async (req, res) => {
//   const {first_name, password} = req.body;
//   if (!first_name || !password) {
//     return res.status(400).json({
//       status: 'Error',
//       error: 'Mising Data',
//     });
//   }
//   try {
//     const exisitingStudent = await Student.findOne({
//       where: {
//         first_name: first_name,
//         password: password,
//       }
//     });
//     if (!exisitingStudent) {
//       return res.status(404).json({
//         status: 'Error',
//         Error: 'Failed Credentials',
//       });
//     }
//     const Hush_password = await bcrypt.compare(password, exisitingStudent.password);
//     if (!Hush_password) {
//       return res.status(404).json({
//         status: 'Error',
//         Error: 'Failed Credentials',
//       });
//     }
//     const Studentoken = jwt.sign(
//       {
//         first_name: exisitingStudent.first_name,
//       },
//       {
//         expiresIn: '3d',
//       },
//     );
//     return res.status(200).cookie('Studentoken', Studentoken {maxAge: 5450540405, httpOnly: true}).json({
//       status: 'Logged',
//       first_name: exisitingStudent.first_name,
//     });
//   } catch(error) {
//     return res.status(400).json({
//       status: 'Error',
//       Error: Error,
//     });
//   }
// }


//
// async function updateStudent(name, email, newData) {
//   try {
//     const existingStudent = await Student.collection('students').findOne({ name, email});
//     if (!existingStudent) {
//       throw new Error('No Student Found');
//     }
//     const Result_count = await Student.collection('students').updateOne({name, email},{$set: newData});
//     if (Result_count === 0) {
//       throw new Error('Could not update Student');
//     }
//     return `Successfully updated Student`;
//   } catch (error) {
//     console.log(error);
//     return error.message;
//   }
// }

module.exports = {createStudent, deleteStudent};