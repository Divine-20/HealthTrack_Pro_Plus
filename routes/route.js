const express = require('express');
const router = express.Router();
const patientController = require('../controller/index');
const heartRateController = require('../controller/heartRate');
router.post('/patient', patientController.savePatientData);

router.get('/patientData', patientController.getPatientDataByID)

router.get('/patients', patientController.getAllPatientData);

router.put('/patient/:patientID', patientController.updatePatientData);

router.delete('/patient/:patientID', patientController.deletePatientData);
router.post('/heartRate', heartRateController.savePatientHeartRate);
router.get('/heartRate', heartRateController.getAllPatientHeartRates);
module.exports = router;
