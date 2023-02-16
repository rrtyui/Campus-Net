const Grades = require('../models/grades');

const CreateGrades = async (req, res) => {
  const {student_id, grade} = req.body;

  if (!student_id || !grade) {
    return res.status(400).json({
      state: "Error",
      error: "Bad Request - Missing data",
    });
  }

  try {
    const existingGrade = await Grades.findOne({
      where: {
        grade: grade,
        student_id: student_id,
      }
    });

    if (existingGrade) {
      throw new Error('Grade already in use');
    }

    const grade = await Grades.create({
      grade: grade,
      student_id: student_id,
    });

    console.log(`Grade created:`,Grades.toJSON());

    return res
        .status(200)
        .json({
          state: "Grade Created",
          id: grade.id,
          username: grade.first_name,
        });

  } catch (error) {
    console.error('An Error has ocurred: ' + error);
  }
}