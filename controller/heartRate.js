const heartRate = require('../models/heartRateModel');

const savePatientHeartRate = (req, res) => {
    const heartRateData = req.body;
    heartRate.savePatientHeartRate(heartRateData, (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Failed to save data' });
      } else {
        res.status(200).json({ message: 'Data saved successfully' });
      }
    });
  };
  const getAllPatientHeartRates = (req, res) => {
    heartRate.getPatientHeartRate((err, data) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Failed to get data' });
      } else {
        res.status(200).json(data);
      }
    });
  };

module.exports = {
    savePatientHeartRate,
    getAllPatientHeartRates,
 
  }
  