"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("categorias", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            titulo: {
                allowNull: false,
                type: Sequelize.STRING,
                validate: {
                    notEmpty: true,
                    msg: `${this} não pode ser vazio`,
                },
            },
            cor: {
                allowNull: false,
                type: Sequelize.STRING,
                validate: {
                    is: /^#([0-9a-f]{3}){1,2}$/i,
                    msg: `${this} deve estar no formato de código hexadecimal`,
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, _Sequelize) {
        await queryInterface.dropTable("categorias");
    },
};
