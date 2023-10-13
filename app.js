// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 6500;
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/route.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Welcome to Health Tracker API');
});
app.use('/api', patientRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
