const Student = require('./students');
const Teacher = require('./teachers');
const Asistance = require('./asistances');
const Group = require('./group');
const Note = require('./notes');
const Resource = require('./resources');
const Sp_resource = require('./specific_resource');
const Inscription = require('./inscriptions');

// defining one-to-many relationship between group

Student.hasMany(models.Note, {
    foreignKey: 'student_id',
});

Note.belongsTo(models.Student, {
    foreignKey: 'student_id',
});