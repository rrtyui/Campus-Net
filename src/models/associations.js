const Student = require('./students');
const Professor = require('./professors');
const Attendance = require('./attendance');
const Course = require('./courses');
const Grade = require('./grades');
const Course_Assigment = require('./course_assignment');

// STUDENT RELATIONSHIPS:
// Defining one-to-many relationship between student and it's grades
Student.hasMany(models.Grade, {
    as: 'grades', // alias for the association, will be like: Student.grades
    foreignKey: 'student_id',
    sourceKey: 'id', // foreign key will be referenced through this id (student's)
    onDelete: 'cascade',
});

Grade.belongsTo(models.Student, {
    as: 'student',
    foreignKey: 'student_id',
    targetKey: 'id', // references to student's id
});


// Defining one-to-many relationship between student and it's attendances
Student.hasMany(models.Attendance, {
    as: 'attendance',
    foreignKey: 'student_id',
    sourceKey: 'id',
    onDelete: 'cascade',
});

Attendance.belongsTo(models.Student, {
    as: 'student',
    foreignKey: 'student_id',
    targetKey: 'id',
});


// Defining many-to-many relationship between student and course, through a 'join/through' table
// This 'join/through' is in our case the CourseAssigment table
// Providing the manually created model, belongsToMany call tells sequelize to create the two 
// attributes userId and profileId automatically, just like other associations also cause 
//Sequelize to automatically add a column to one of the involved models.
Student.belongsToMany(models.Course, {
    through: Course_Assigment, // Using previously created model, that's why it's not in quotes 
});

Course.belongsToMany(models.Student, {
    through: Course_Assigment,
});


// PROFESSOR RELATIONSHIPS:
// Defining one-to-many relationship between student and it's grades
Professor.hasMany(models.Course, {
    as: 'courses',
    foreignKey: 'professor_id',
    sourceKey: 'id',
});

Course.hasOne(models.Professor, {
    as: 'professor',
    foreignKey: 'professor_id',
    targetKey: 'id',
});
