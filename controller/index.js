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
const getAllPatientData = (req, res) => {
  patientModel.getPatients((err, data) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to get data' });
    } else {
      res.status(200).json(data);
    }
  });
};

const getPatientDataByID = (req, res) => {
  const patientNID = req.params.patientNID; 
  patientModel.getPatientData(patientNID, (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to get data' });
    } else if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Data not found' });
    }
  });
};


const updatePatientData = (req, res) => {
  const patientNID = req.params.patientNID;
  const updatedData = req.body;
  patientModel.updatePatient(patientNID, updatedData, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to update data' });
    } else {
      res.status(200).json({ message: 'Data updated successfully' });
    }
  });
};

const deletePatientData = (req, res) => {
  const patientNID = req.params.patientNID;
  patientModel.deletePatient(patientNID, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to delete data' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  });
};

module.exports = {
  savePatientData,
  getPatientDataByID,
  getAllPatientData,
  updatePatientData,
  deletePatientData
}
