'use strict'

const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const cors = require('./middlewares/cors.js');
require('./config/dbconnect.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors);

app.listen(PORT, () => {
    console.log('---> SERVER RUNNING ON PORT ' + PORT);
    console.log('---> SERVER URL: http://localhost:3000');
});
