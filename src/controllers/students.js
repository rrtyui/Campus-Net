const Student = require('../models/students');
const bcrypt = require('bcrypt'); // for password enrcyptation

function isAlphabetical(input) {
  return /^[a-zA-Z]+$/.test(input); // matches any string that contains only alphabetical characters, from the beginning to the end of the string
  // +$ in a regular expression means that the preceding character or group must occur one or more times, and must be present at the end of the string.
}
function isValidEmail(email) {
  // Regular expression to match a valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // notWhitespaceOr@ + @ + notWhitespaceOr@ + . + notWhitespaceOr@
  // +: a rule that a certain character or group (such as "/[0-9]+/") must occur one or more times in order for the regular expression to match.
  return emailRegex.test(email);
}

const createStudent = async (req, res) => {
  const {name, email} = req.body;

  if (!name || !email) {
    return res.status(400).json({
      state: "Error",
      error: "Bad Request - Missing data",
    });
  }
  if (!isAlphabetical(name) || !isValidEmail(email))
  {
    return res.status(400).json({
      state: "Error",
      error: "Bad Request - Data passed is malformed, check request again",
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

    // const securedPassword = await bcrypt.hash(password, 8);

    const newStudent = await Student.create({
      first_name : name,
      email: email,
    });

    console.log(`Student created:`, newStudent.toJSON()); // server-side

    return res // client-side
        .status(201)
        .json({
          state: "Student succesfully registered",
          id: newStudent.id,
          name: newStudent.first_name,
          email: newStudent.email,
        });

  } catch (error) {
    console.error('An Error has ocurred: ' + error.message); // for server-side
  
    return res // what the "client" sees
    .status(500)
    .json({
      state: "Error",
      error: error.message,
    });
  }
}

const findStudent = async (req, res) => {
  const student_id = req.query.StudentId;
  if (!student_id) {
    return res.status(400).json({
      state: "Error",
      error: "Bad Request - Missing data",
    });
  }
  try {
    const studentFound = await Student.findByPk(student_id);
    if (!studentFound) {
      throw new Error('Student doesn\'t exists in records');
    }

    console.log(`Student has been found:`, studentFound.first_name);
    
    return res
    .status(201)
    .json({
      state: "Student has been found",
      name : studentFound.first_name,
      email: studentFound.email,
    });

  } catch (error) {
    console.error("An error has ocurred: " + error.message);

    return res.status(500).json({
      state: "Error",
      error: error.message,
    });
  }
}

const findAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.findAll();
    if (!allStudents) {
      throw new Error('No students where found');
    }

    const studentsdata = allStudents.map((student) => ({ name: student.first_name, email: student.email }));
    console.log(`Students have been found:`, studentsdata);
    
    return res
    .status(201)
    .json({
      state: "Students have been found",
      students : studentsdata,
    });

  } catch (error) {
    console.error("An error has ocurred: " + error.message);

    return res.status(500).json({
      state: "Error",
      error: error.message,
    });
  }
}

const deleteStudent = async (req, res) => {
  const { studentId } = req.body;
  if (!studentId) {
    return res.status(400).json({
      state: "Error",
      error: "Bad Request - Missing data",
    });
  }
  try {
    const studentToDelete = await Student.findByPk(studentId);
    if (!studentToDelete) {
      throw new Error('Student doesn\'t exists in records');
    }

    await studentToDelete.destroy();

    console.log("Student has been deleted");
    return res.status(200).json({ deleteResponse: "deleted" });

  } catch (error) {
    console.error("Error: " + error);
    return res
    .status(500)
    .json(
      {
        state: "Error", error: error.message
      });
  }
}

const updateStudent = async (req, res) => {
  const { studentId, name, email } = req.body;
  if (!studentId ) {
    return res
    .status(400)
    .json({
      state: "Error",
      error: "Bad Request - Missing data",
    });
  }
  try {
    const studentUpd = await Student.findByPk(studentId);
    if (!studentUpd){
      throw new Error('No student found for updating, check again');
    }
    if (isAlphabetical(name)){ // name = first_name
        studentUpd.first_name = name;
        await studentUpd.save(); // save changes to database
        console.log("First name updated");
        return res
        .status(200)
        .json({
          state: "Student's name updated successfully",
          name: studentUpd.first_name
        });
    } else if (isValidEmail(email)){
      studentUpd.email = email;
      await studentUpd.save();
      console.log('Email updated');
      return res
      .status(200)
      .json({
        state: "Student's email updated successfully",
        email: studentUpd.email
      });
    //} else if (req.body.last_name) { // not updated, use validation
      //studentUpd.last_name = newData.last_name;
      // await studentUpd.save()
      //  return res
      //    .status(200)
      //    .json({
      //      state: "Student updated successfully",
      //      updatedStudent: studentUpd
      //    });
    } else {
      return res.status(400).json({
        state: "Error",
        error: "Bad Request - Data passed is malformed, check request again",
      });
    }

  } catch (error) {
    console.error("Error: " + error);
    return res
    .status(500)
    .json(
      {
        state: "Error", error: error.message
      });
  }
}

module.exports = {createStudent, findStudent, findAllStudents, deleteStudent, updateStudent};