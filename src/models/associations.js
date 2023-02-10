const Student = require('./students');
const Professor = require('./professors');
const Attendance = require('./attendance');
const Course = require('./courses');
const Grade = require('./grades');
const Resource = require('./resources');
const Course_Assigment = require('./course_assignment');

// defining one-to-many relationship between group

Student.hasMany(models.Note, {
    foreignKey: 'student_id',
});

Note.belongsTo(models.Student, {
    foreignKey: 'student_id',
});