/* eslint-disable no-undef */
const { CategoriasServices } = require('../../services');
const { describe, it, expect } = require('@jest/globals');

describe('CategiriaServices', () => {
    const categoriasServices = new CategoriasServices();

    const novoObjetoCategoria = {
        id: 1,
        titulo: 'Livre',
        cor: '#000000',
        created_at: '2022-01-01',
        updated_at: '2022-01-01',
    };

    const mockCategoria = jest.fn().mockReturnValue({ ...novoObjetoCategoria });

    const mockCategoriaArray = jest
        .fn()
        .mockReturnValue([{ ...novoObjetoCategoria }]);

    it('Deve simular a criação de uma nova categoria', () => {
        categoriasServices.criar = mockCategoria;

        const novaCategoria = categoriasServices.criar();

        expect(novaCategoria).toEqual(
            expect.objectContaining({ ...novoObjetoCategoria })
        );
    });

    it('Deve simular o acesso a uma categoria pelo seu id', () => {
        categoriasServices.acessarPorId = mockCategoria;
        const categoria = categoriasServices.acessarPorId(1);
        expect(categoria.id).toBe(1);
    });

    it('Deve simular a listagem de categorias', () => {
        categoriasServices.listar = mockCategoriaArray;
        const categorias = categoriasServices.listar();
        expect(categorias).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    titulo: expect.any(String),
                    cor: expect.any(String),
                    created_at: expect.any(String),
                    updated_at: expect.any(String),
                }),
            ])
        );
    });

    it('Deve simular a atualização de uma categoria selecionada pelo seu id, retornando 1 caso sucesso', () => {
        categoriasServices.atualizar = jest.fn().mockReturnValue(1);
        const isUpdated = categoriasServices.atualizar(mockCategoria.id);
        expect(isUpdated).toBe(1);
    });

    it('Deve simular a remoção de uma categoria selecionada pelo seu id, retornando 1 caso sucesso', () => {
        categoriasServices.remover = jest.fn().mockReturnValue(1);
        const isRemoved = categoriasServices.remover(mockCategoria.id);
        expect(isRemoved).toBe(1);
    });
});
