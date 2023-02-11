const Courses = require('../models/courses');

async function CreateCourse(student_id, course ) {
    const Course = await Courses.create ({
        course : course,
        student_id: student_id,
    });
    console.log('Corse Created', Course.toJSON());
}

CreateCourse('44', 'Matematicas');