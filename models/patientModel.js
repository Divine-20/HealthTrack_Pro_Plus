const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('HealthTracker.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQLite database.');
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

const getPatientData = (patientNID, callback) => {
  db.get(
    'SELECT * FROM patient_data WHERE patient_NID = ?',
    [patientNID],
    (err, row) => {
      if (err) {
        console.error(err.message);
        callback(err, null);
      } else {
        if (row) {
          callback(null, row);
        } else {
          callback(null, null);
        }
      }
    }
  );
};

const getPatients = (callback) => {
  db.all('SELECT * FROM patient_data', (err, rows) => {
    if (err) {
      console.error(err.message);
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
};

const updatePatient = (patientID, updatedData, callback) => {
  const { heart_rate, body_temperature, patient_name, patient_NID, patient_frequent_sickness } = updatedData;

  db.run(
    'UPDATE patient_data SET heart_rate = ?, body_temperature = ?, patient_name = ?, patient_NID = ?, patient_frequent_sickness = ? WHERE id = ?',
    [heart_rate, body_temperature, patient_name, patient_NID, patient_frequent_sickness, patientID],
    callback
  );
};

const deletePatient = (patientID, callback) => {
  db.run(
    'DELETE FROM patient_data WHERE id = ?',
    [patientID],
    callback
  );
};

module.exports = { savePatientData, getPatientData, getPatients, updatePatient, deletePatient };
