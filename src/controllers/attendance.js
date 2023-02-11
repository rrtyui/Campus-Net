const Atendances = require('../models/attendance');

async function createAtendance(student_id, atendance) {
    const Atendance = await Atendances.create({
        student_id: student_id,
        atendance: atendance,
    });
    console.log('Atendance created', Atendance.toJSON());
}

createAtendance('22', '1');