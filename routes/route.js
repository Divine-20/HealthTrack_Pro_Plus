const express = require('express');
const router = express.Router();
const patientController = require('../controller/index');

router.post('/patient', patientController.savePatientData);

module.exports = router;
