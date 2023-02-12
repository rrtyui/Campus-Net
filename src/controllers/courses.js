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

async function deleteCourse(course) {
    try {
      const existingCourse = await Courses.findOne({
        where: {
          course: course,
        }
      });
      if (!existingCourse) {
        throw new Error(`Course Not Found`);
      }
      const Result_count = await Courses.collection('courses').deleteOne({ course });
      if (Result_count.deletedCount === 0) {
        throw new Error(`Could not delete course`);
      }

      return `Successfully deleted course`;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

  async function updateCourse(course, newData) {
    try {
      const existingCourse = await Courses.collection('course').findOne({ course});
      if (!existingCourse) {
        throw new Error('No Course Found');
      }
      const Result_count = await Courses.collection('course').updateOne({course},{$set: newData});
      if (Result_count === 0) {
        throw new Error('Could not update Course');
      }
      return `Successfully updated Course`;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

CreateCourse('44', 'Matematicas');