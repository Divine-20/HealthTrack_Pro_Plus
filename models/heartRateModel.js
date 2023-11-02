const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('HealthTracker.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQLite database.');
});

db.run(`
  CREATE TABLE IF NOT EXISTS patient_heartRate (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    heart_rate INTEGER
  )
`);

const savePatientHeartRate = (patientData, callback) => {
  const { heart_rate} = patientData;

  db.run(
    'INSERT INTO patient_heartRate (heart_rate) VALUES (?)',
    [heart_rate],
    callback
  );
};
const getPatientHeartRate = (callback) => {
  db.all('SELECT * FROM patient_heartRate', (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
};
module.exports = { savePatientHeartRate, getPatientHeartRate};
