const Services = require('./Services.js');
const db = require('../models');

class VideosServices extends Services {
    constructor() {
        super('Videos');
    }

    async listarPorCategoria(id) {
        return db[this.model].findAll({
            where: { categoriaId: Number(id) },
        });
    }

    async acessarPorTitulo(titulo) {
        return db[this.model].findOne({
            where: { titulo: String(titulo) },
        });
    }
}

module.exports = VideosServices;
