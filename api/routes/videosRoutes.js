const { Router } = require("express");
const VideoController = require("../controllers/VideoController.js");
const routes = Router();

routes
    .get("/videos", VideoController.acessarVideos)
    .get("/videos/:id", VideoController.acessarVideoPorId)
    .post("/videos", VideoController.cadastarVideo)
    .put("/videos/:id", VideoController.atualizarVideo)
    .delete("/videos/:id", VideoController.removerVideo);

module.exports = routes;
