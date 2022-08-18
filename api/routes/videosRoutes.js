const { Router } = require('express');
const VideoController = require('../controllers/VideoController.js');
const routes = Router();

routes
    .get('/videos/search', VideoController.acessarVideoPorTitulo)
    .get('/videos/free', VideoController.listarVideosSemAutenticacao)
    .get('/videos/:id', VideoController.acessarVideoPorId)
    .get('/videos', VideoController.listarVideos)
    .get('/categorias/:id/videos/', VideoController.listarVideosPorCategoria)
    .post('/videos', VideoController.cadastarVideo)
    .put('/videos/:id', VideoController.atualizarVideo)
    .delete('/videos/:id', VideoController.removerVideo);

module.exports = routes;
