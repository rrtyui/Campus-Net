const Grades = require('../models/grades');

async function CreateGrades(student, grades) {
    const Grade = await Grades.create({
        id : student,
        garde : grades,

    });
    console.log('Grade created:', Grade.toJson());
}

console.log(process.env);
CreateGrades('Marcelo', '12');