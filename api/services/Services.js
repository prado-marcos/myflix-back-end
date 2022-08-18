const db = require('../models');

class Services {
    constructor(model) {
        this.model = model;
    }

    async acessarPorId(id) {
        return db[this.model].findByPk(id);
    }

    async listar(where = {}, page) {
        const limit = 5;
        return db[this.model].findAll({
            where: { ...where },
            limit: limit,
            offset: limit * page,
        });
    }

    async criar(data) {
        return db[this.model].create(data);
    }

    async atualizar(newData, id) {
        return db[this.model].update(newData, { where: { id: id } });
    }

    async remover(id) {
        return db[this.model].destroy({ where: { id: id } });
    }
}

module.exports = Services;
