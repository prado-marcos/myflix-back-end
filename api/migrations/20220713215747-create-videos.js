"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Videos", {
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
            descricao: {
                allowNull: false,
                type: Sequelize.STRING,
                validate: {
                    notEmpty: true,
                    msg: `${this} não pode ser vazio`,
                },
            },
            url: {
                allowNull: false,
                type: Sequelize.STRING,
                validate: {
                    isUrl: true,
                    msg: `${this} não pode ser vazio`,
                },
            },
            categoriaId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Categorias",
                    key: "id",
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Videos");
    },
};
