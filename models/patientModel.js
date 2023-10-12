const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('HealthTracker.db',(err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
  db.run(`
  CREATE TABLE IF NOT EXISTS patient_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    heart_rate INTEGER,
    body_temperature REAL,
    patient_name TEXT,
    patient_NID TEXT,
    patient_frequent_sickness TEXT
  )
`);
const savePatientData = (patientData, callback) => {
  const { heart_rate, body_temperature, patient_name, patient_NID, patient_frequent_sickness } = patientData;

  db.run(
    'INSERT INTO patient_data (heart_rate, body_temperature, patient_name, patient_NID, patient_frequent_sickness) VALUES (?, ?, ?, ?, ?)',
    [heart_rate, body_temperature, patient_name, patient_NID, patient_frequent_sickness],
    callback
  );
};

module.exports = { savePatientData };
