/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
    async up(queryInterface, _Sequelize) {
        await queryInterface.bulkInsert(
            'Categorias',
            [
                {
                    id: 1,
                    titulo: 'LIVRE',
                    cor: '#ffffff',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    titulo: 'Meme',
                    cor: '#bbbbbb',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    titulo: 'Música',
                    cor: '#0b0b0b',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    titulo: 'Educativo',
                    cor: '#000000',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    titulo: 'Games',
                    cor: '#dddddd',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, _Sequelize) {
        await queryInterface.bulkDelete('Categorias', null, {});
    },
};
