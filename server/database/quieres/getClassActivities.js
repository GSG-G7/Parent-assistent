const connection = require('../config/connection');


const getClassActivities = (subjectId, classId) => {
  const sql = {
    text: 'SELECT activity_date, description, title FROM activity WHERE subject_id = $1 and class = $2',
    values: [
      subjectId,
      classId,
    ],
  };

  return connection.query(sql);
};

module.exports = { getClassActivities };