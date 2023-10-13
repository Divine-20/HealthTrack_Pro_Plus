const patientModel = require('../models/patientModel');

const savePatientData = (req, res) => {
  const patientData = req.body;
  patientModel.savePatientData(patientData, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to save data' });
    } else {
      res.status(200).json({ message: 'Data saved successfully' });
    }
  });
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
module.exports = { savePatientData,getPatientData };
