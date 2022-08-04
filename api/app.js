const express = require('express');
const { videos, categorias } = require('./routes');
const app = express();

app.use(express.json());

app.use(videos, categorias);

module.exports = { app };
