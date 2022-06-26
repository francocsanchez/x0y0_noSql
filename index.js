require('dotenv').config('.env'); // Variables de entorno
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');

const app = express(); // Inicio del servidor

app.use(cors());

app.listen(process.env.APP_PORT || 3000, () => {
    console.log('*** Server running ***');
    console.log(`http://localhost/${process.env.APP_PORT || 3000}`);
})
dbConnect();