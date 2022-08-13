/* eslint-disable no-undef */
const { VideosServices } = require('../../services');
const { describe, it, expect } = require('@jest/globals');

const expectedCategoria = expect.objectContaining({
    id: expect.any(Number),
    titulo: expect.any(String),
    descricao: expect.any(String),
    url: expect.any(String),
    categoriaId: expect.any(Number),
    created_at: expect.any(String),
    updated_at: expect.any(String),
});
describe('VideosServices', () => {
    const videosServices = new VideosServices();

    const novoObjetoVideo = {
        id: 1,
        titulo: 'Teste',
        descricao: 'Video de teste',
        url: 'https://teste.com',
        categoriaId: 1,
        created_at: '2022-01-01',
        updated_at: '2022-01-01',
    };

    const mockVideo = jest.fn().mockReturnValue({ ...novoObjetoVideo });

    const mockVideosArray = jest.fn().mockReturnValue([{ ...novoObjetoVideo }]);

    it('Deve simular a criação de um novo vídeo', () => {
        videosServices.criar = mockVideo;

        const novaVideo = videosServices.criar();

        expect(novaVideo).toEqual(
            expect.objectContaining({ ...novoObjetoVideo })
        );
    });

    it('Deve simular o acesso a um vídeo pelo seu id', () => {
        videosServices.acessarPorId = mockVideo;
        const Video = videosServices.acessarPorId(1);
        expect(Video.id).toBe(1);
    });

    it('Deve simular a listagem de vídeos', () => {
        videosServices.listar = mockVideosArray;
        const Videos = videosServices.listar();
        expect(Videos).toEqual(expect.arrayContaining([expectedCategoria]));
    });

    it('Deve simular a atualização de um vídeo selecionada pelo seu id, retornando 1 caso sucesso', () => {
        videosServices.atualizar = jest.fn().mockReturnValue(1);
        const isUpdated = videosServices.atualizar(mockVideo.id);
        expect(isUpdated).toBe(1);
    });

    it('Deve simular a remoção de um vídeo selecionada pelo seu id, retornando 1 caso sucesso', () => {
        videosServices.remover = jest.fn().mockReturnValue(1);
        const isRemoved = videosServices.remover(mockVideo.id);
        expect(isRemoved).toBe(1);
    });

    it('Deve simular a listagem de videos por categoria, selecionando a categoria por id', () => {
        videosServices.listarPorCategoria = mockVideosArray;
        const videos = videosServices.listarPorCategoria(mockVideo.categoriaId);
        expect(videos).toEqual(expect.arrayContaining([expectedCategoria]));
    });

    it('Deve simular a listagem de videos por titulo, selecionando a categoria por id', () => {
        videosServices.listarPorCategoria = mockVideosArray;
        const videos = videosServices.listarPorCategoria(mockVideo.titulo);
        expect(videos).toEqual(expect.arrayContaining([expectedCategoria]));
    });
});
