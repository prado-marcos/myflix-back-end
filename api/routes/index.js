const express = require("express");
const videos = require("./videosRoutes.js");

module.exports = (app) => {
    app.use(express.json(), videos);
};
