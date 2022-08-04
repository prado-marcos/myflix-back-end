const { Router } = require('express');
const VideoController = require('../controllers/VideoController.js');
const routes = Router();

routes
    .get('/videos', VideoController.listarVideos)
    .get('/videos/:id', VideoController.acessarVideoPorId)
    .get('/videos/search', VideoController.acessarVideoPorTitulo)
    .get('/categorias/:id/videos/', VideoController.listarVideosPorCategoria)
    .post('/videos', VideoController.cadastarVideo)
    .put('/videos/:id', VideoController.atualizarVideo)
    .delete('/videos/:id', VideoController.removerVideo);

module.exports = routes;
