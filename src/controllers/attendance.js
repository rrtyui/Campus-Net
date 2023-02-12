const Atendances = require('../models/attendance');

async function createAtendance(student_id, atendance) {
    const Atendance = await Atendances.create({
        student_id: student_id,
        atendance: atendance,
    });
    console.log('Atendance created', Atendance.toJSON());
}

async function deleteAtendance(student_id, atendance) {
    try {
      const existingAtendance = await Atendances.findOne({
        where: {
          student_id: student_id,
          atendance: atendance,
        }
      });
      if (!existingAtendance) {
        throw new Error(`No Atendance Found`);
      }
      const Result_count = await Atendances.collection('atendance').deleteOne({ student_id, atendance});
      if (Result_count.deletedCount === 0) {
        throw new Error(`Could not delete atendace`);
      }

      return `Successfully deleted atendace`;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

  async function updateAtendance(student_id, atendace, newData) {
    try {
      const existingAtendance = await Attendances.collection('atendance').findOne({ student_id, atendace});
      if (!existingAtendance) {
        throw new Error('No Atendace Found');
      }
      const Result_count = await Atendances.collection('atendance').updateOne({student_id, atendace},{$set: newData});
      if (Result_count === 0) {
        throw new Error('Could not update Atendace');
      }
      return `Successfully updated Atendace`;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }

createAtendance('22', '1');