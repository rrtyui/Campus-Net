const Courses = require('../models/courses');

async function CreateCourse(student_id, course ) {
    const exisitngCourse = await Courses.findOne({
        where: {
            course: course,
        }
    });
    if (exisitngCourse) {
        throw new Error('Course already created')
    }
    const Course = await Courses.create ({
        course : course,
        student_id: student_id,
    });
    console.log('Corse Created', Course.toJSON());
}

CreateCourse('44', 'Matematicas');