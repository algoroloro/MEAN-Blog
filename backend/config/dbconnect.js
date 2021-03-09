'use strict'

const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_CONNECTION;

mongoose.connect(MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
)
    .then(() => console.log('---> SUCCESSFUL DATABASE CONNECTION'))
    .catch(console.error);
