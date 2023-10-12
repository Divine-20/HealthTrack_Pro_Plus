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

module.exports = { savePatientData };
