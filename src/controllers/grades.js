const Grades = require('../models/grades');

async function CreateGrades(student_id, grade) {
    const Grade = await Grades.create({
        grade : grade,
        student_id : student_id,
    });
    console.log('Grade created:', Grade.toJson());
}

async function deleteGrades(student_id, grade) {
    try {
      const existingGrade = await Grades.findOne({
        where: {
          grade: grade,
          student_id: student_id,
        }
      });
      if (!existingGrade) {
        throw new Error(`Grade Not Found`);
      }
      const Result_count = await Grades.collection('grades').deleteOne({ student_id, grade});
      if (Result_count.deletedCount === 0) {
        throw new Error(`Could not delete grade`);
      }

      return `Successfully deleted grade`;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

  async function updateGrade(student_id, grade, newData) {
    try {
      const existingGrade = await Grades.collection('grade').findOne({ student_id, grade});
      if (!existingGrade) {
        throw new Error('No Grade Found');
      }
      const Result_count = await Grades.collection('grade').updateOne({student_id, grade},{$set: newData});
      if (Result_count === 0) {
        throw new Error('Could not update Grade');
      }
      return `Successfully updated Grade`;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

CreateGrades('36', '12');