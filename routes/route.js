const express = require('express');
const router = express.Router();
const patientController = require('../controller/index');
router.post('/patient', patientController.savePatientData);
router.get('/patientData', patientController.getPatientData);
module.exports = router;
