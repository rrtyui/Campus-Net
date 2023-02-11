const Grades = require('../models/grades');

async function CreateGrades(student_id, grade) {
    const Grade = await Grades.create({
        grade : grade,
        student_id : student_id,
    });
    console.log('Grade created:', Grade.toJson());
}

CreateGrades('36', '12');