'use strict'

const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const cors = require('./middlewares/cors.js');
const RouterConfig = require('./utils/routerConfig.js');
const Routes = require('./routes/routes.js');
require('./config/dbconnect.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors);

RouterConfig(app, '/article', Routes.ArticleRoutes);
RouterConfig(app, '/user', Routes.UserRoutes);

app.listen(PORT, () => {
    console.log('---> SERVER RUNNING ON PORT ' + PORT);
    console.log('---> SERVER URL: http://localhost:3000');
});
