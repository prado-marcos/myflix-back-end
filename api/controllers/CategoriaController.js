const { CategoriasServices } = require("../services");
const categoriasServices = new CategoriasServices();

class CategoriaController {
    static async listarCategorias(_req, res) {
        try {
            const categorias = await categoriasServices.listar();
            if (categorias.length === 0) {
                return res
                    .status(200)
                    .json({ message: "Não há nenhuma categoria" });
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
            if (categoria) {
                return res.status(200).json(categoria);
            } else {
                throw new Error("Categoria não encontrada");
            }
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async cadastarCategoria(req, res) {
        const categoria = req.body;
        try {
            const novaCategoria = await categoriasServices.criar(categoria);
            if (novaCategoria) {
                return res.status(200).json(novaCategoria);
            } else {
                throw new Error("Não foi possível cadastar a categoria");
            }
        } catch (error) {
            res.status(500).json(error.message);
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
            if (categoriaAtualizada) {
                return res
                    .status(200)
                    .json({ message: "Atualização feita com sucesso" });
            } else {
                throw new Error("Não foi possível atualizar a categoria");
            }
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
            if (categoriaRemovida) {
                return res
                    .status(200)
                    .json({ message: "Exclusão feita com sucesso" });
            } else {
                throw new Error("Não foi possível remover a categoria");
            }
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = CategoriaController;
