const express = require('express');
const videos = require('./videosRoutes.js');
const categorias = require('./categoriasRoutes.js');

module.exports = (app) => {
    app.use(express.json(), videos, categorias);
};
