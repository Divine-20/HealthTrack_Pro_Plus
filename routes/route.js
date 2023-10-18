const express = require('express');
const router = express.Router();
const patientController = require('../controller/index');
router.post('/patient', patientController.savePatientData);

router.get('/patientData', patientController.getPatientDataByID)

router.get('/patients', patientController.getAllPatientData);

router.put('/patient/:patientID', patientController.updatePatientData);

router.delete('/patient/:patientID', patientController.deletePatientData);

module.exports = router;
