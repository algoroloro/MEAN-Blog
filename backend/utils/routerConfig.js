'use strict'

const express = require('express');

const RouterConfig = (app, url, callback) => {
    app.use(url, callback(express));
}

module.exports = RouterConfig;
