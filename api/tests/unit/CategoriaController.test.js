const request = require('supertest');
const { app } = require('../../app.js');

describe('Categorias', () => {
    // describe('.post /categorias', () => {
    //     it('Retornar status 200 se categoria for criada com sucesso', async () => {
    //         const body = {
    //             id: 1,
    //             titulo: 'LIVRE',
    //             cor: '#ffffff',
    //             createdAt: new Date(),
    //             updatedAt: new Date(),
    //         };

    //         const response = await request(app).post('/categorias').send(body);
    //         expect(response.status).toBe(200);
    //     });
    // });

    describe('.get /categorias', () => {
        it('Retornar status 204', async () => {
            const response = await request(app).get('/categorias');
            expect(response.status).toBe(204);
        });
    });
});
