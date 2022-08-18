const { CategoriasServices } = require('../services');
const categoriasServices = new CategoriasServices();

class CategoriaController {
    static async listarCategorias(_req, res) {
        try {
            const categorias = await categoriasServices.listar();
            if (categorias.length === 0) {
                return res
                    .status(204)
                    .json({ message: 'Não há nenhuma categoria' });
            }
            return res.status(200).json(categorias);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarCategoriaPorId(req, res) {
        const { id } = req.params;
        try {
            const categoria = await categoriasServices.acessarPorId(Number(id));
            if (!categoria) {
                throw new Error('Categoria não encontrada');
            }
            return res.status(200).json(categoria);
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async cadastarCategoria(req, res) {
        const categoria = req.body;
        try {
            if (Object.keys(categoria).length === 0) {
                throw new Error('O corpo da requisição não pode ser vazio');
            }
            const novaCategoria = await categoriasServices.criar(categoria);
            if (!novaCategoria) {
                throw new Error('Não foi possível cadastar a categoria');
            }
            return res.status(200).json({
                message: 'Categoria cadastrada com sucesso',
                novaCategoria: novaCategoria,
            });
        } catch (error) {
            if (error.message === 'O corpo da requisição não pode ser vazio') {
                return res.status(400).json(error.message);
            }
            return res.status(500).json(error.message);
        }
    }

    static async atualizarCategoria(req, res) {
        const { id } = req.params;
        const novosDados = req.body;
        try {
            const categoriaAtualizada = await categoriasServices.atualizar(
                novosDados,
                Number(id)
            );
            if (!categoriaAtualizada) {
                throw new Error('Não foi possível atualizar a categoria');
            }
            return res
                .status(204)
                .json({ message: 'Atualização feita com sucesso' });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async removerCategoria(req, res) {
        const { id } = req.params;
        try {
            const categoriaRemovida = await categoriasServices.remover(
                Number(id)
            );
            if (!categoriaRemovida) {
                throw new Error('Não foi possível remover a categoria');
            }
            return res
                .status(200)
                .json({ message: 'Exclusão feita com sucesso' });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = CategoriaController;
