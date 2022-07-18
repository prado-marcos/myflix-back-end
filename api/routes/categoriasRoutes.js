const { Router } = require("express");
const CategoriaController = require("../controllers/CategoriaController.js");
const routes = Router();

routes
    .get("/categorias", CategoriaController.listarCategorias)
    .get("/categorias/:id", CategoriaController.acessarCategoriaPorId)
    .post("/categorias", CategoriaController.cadastarCategoria)
    .put("/categorias/:id", CategoriaController.atualizarCategoria)
    .delete("/categorias/:id", CategoriaController.removerCategoria);

module.exports = routes;
