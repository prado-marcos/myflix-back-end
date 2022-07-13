const db = require("../models");

class Services {
    constructor(model) {
        this.model = model;
    }

    async getById(id) {
        return db[this.model].findByPk(id);
    }

    async getAll(where = {}) {
        return db[this.model].findAll({ where: { ...where } });
    }

    async create(data) {
        return db[this.model].create(data);
    }

    async update(newData, id) {
        return db[this.model].update(newData, { where: { id: id } });
    }

    async remove(id) {
        return db[this.model].destroy({ where: { id: id } });
    }
}

module.exports = Services;
