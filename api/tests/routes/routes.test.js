/* eslint-disable no-undef */
const request = require('supertest');
const {
    describe,
    expect,
    it,
    test,
    beforeEach,
    afterEach,
} = require('@jest/globals');

const app = require('../../app.js');
let server;
beforeEach(() => {
    const port = process.env.PORT || 3000;
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

describe('GET em /categorias', () => {
    it('Deve retornar uma lista de categorias vazia', async () => {
        await request(app).get('/categorias').expect(204);
    });
});

let idCategoria;
describe('POST em /categorias', () => {
    it('Deve adicionar uma nova categoria', async () => {
        const resposta = await request(app)
            .post('/categorias')
            .send({
                titulo: 'POST /categorias',
                cor: '#000000',
            })
            .expect(200);

        idCategoria = resposta.body.novaCategoria.id;
    });
    it('Deve nao adicionar nada ao passar o body vazio', async () => {
        await request(app).post('/categorias').send({}).expect(400);
    });
});

describe('GET em /categorias/id', () => {
    it('Deve retornar recurso selecionado', async () => {
        await request(app).get(`/categorias/${idCategoria}`).expect(200);
    });
});

describe('GET em /categorias', () => {
    it('Deve listar categorias cadastradas', async () => {
        await request(app).get('/categorias').expect(200);
    });
});

describe('PUT em /categorias/id', () => {
    test.each([
        ['titulo', { titulo: 'PUT /categorias/id' }],
        ['cor', { cor: '#111111' }],
    ])('Deve alterar o campo %s', async (chave, param) => {
        const requisicao = { request };
        const spy = jest.spyOn(requisicao, 'request');
        await requisicao
            .request(app)
            .put(`/categorias/${idCategoria}`)
            .send(param)
            .expect(204);

        expect(spy).toHaveBeenCalled();
    });
});

describe('GET em /videos', () => {
    it('Deve retornar uma lista de videos vazia', async () => {
        await request(app).get('/videos').expect(204);
    });
});

let idVideo;
let tituloVideo;
describe('POST em /videos', () => {
    it('Deve adicionar uma novo video', async () => {
        const resposta = await request(app)
            .post('/videos')
            .send({
                titulo: 'POST /videos',
                descricao: 'Teste POST /videos',
                url: 'https://teste.com',
                categoriaId: idCategoria,
            })
            .expect(200);

        idVideo = resposta.body.id;
        tituloVideo = resposta.body.titulo;
    });
    it('Deve não adicionar nada ao passar o body vazio', async () => {
        await request(app).post('/videos').send({}).expect(400);
    });
});

describe('GET em /videos/id', () => {
    it('Deve retornar recurso selecionado', async () => {
        await request(app).get(`/videos/${idVideo}`).expect(200);
    });
});

describe('GET em /videos', () => {
    it('Deve listar videos cadastrados', async () => {
        await request(app).get('/videos').expect(200);
    });
});

describe('GET em /videos/search', () => {
    it('Deve retornar video com o titulo informado', async () => {
        await request(app)
            .get('/videos/search')
            .query({ titulo: tituloVideo })
            .expect(200);
    });
    it('Deve retornar status 404 para video nao encontrado', async () => {
        await request(app).get('/videos/search').query({}).expect(404);
    });
});

describe('GET em /categorias/:id/videos/', () => {
    it('Deve retornar videos com o id de categoria selecionado', async () => {
        await request(app)
            .get(`/categorias/${idCategoria}/videos/`)
            .expect(200);
    });
});

describe('PUT em /videos/id', () => {
    test.each([
        ['titulo', { titulo: 'PUT /videos/id' }],
        ['descricao', { descricao: 'Teste PUT /videos/id' }],
        ['url', { url: 'https://teste.put.com' }],
    ])('Deve alterar o campo %s', async (_chave, param) => {
        const requisicao = { request };
        const spy = jest.spyOn(requisicao, 'request');
        await requisicao
            .request(app)
            .put(`/videos/${idVideo}`)
            .send(param)
            .expect(204);

        expect(spy).toHaveBeenCalled();
    });
});

describe('DELETE em /videos/id', () => {
    it('Deletar o recurso adcionado', async () => {
        await request(app).delete(`/videos/${idVideo}`).expect(200);
    });
});

describe('DELETE em /categorias/id', () => {
    it('Deletar o recurso adcionado', async () => {
        await request(app).delete(`/categorias/${idCategoria}`).expect(200);
    });
});
