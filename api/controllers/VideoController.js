const { VideosServices } = require('../services');
const videosServices = new VideosServices();

class VideoController {
    static async listarVideos(_req, res) {
        try {
            const videos = await videosServices.listar();
            if (videos.length === 0) {
                return res.status(204).json({ message: 'Não há nenhum vídeo' });
            }
            return res.status(200).json(videos);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async listarVideosPorCategoria(req, res) {
        const { id } = req.params;
        try {
            const videos = await videosServices.listarPorCategoria(id);
            if (videos.length === 0) {
                return res.status(204).json({ message: 'Não há nenhum vídeo' });
            }
            return res.status(200).json(videos);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarVideoPorId(req, res) {
        const { id } = req.params;
        try {
            const video = await videosServices.acessarPorId(Number(id));
            if (!video) {
                throw new Error('Vídeo não encontrado');
            }
            return res.status(200).json(video);
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async acessarVideoPorTitulo(req, res) {
        const { titulo } = req.query;
        try {
            const video = await videosServices.acessarPorTitulo(String(titulo));
            if (!video) {
                throw new Error('Vídeo não encontrado');
            }
            return res.status(200).json(video);
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async cadastarVideo(req, res) {
        const video = req.body;
        try {
            if (Object.keys(video).length === 0) {
                throw new Error('O corpo da requisição não pode ser vazio');
            }
            const novoVideo = await videosServices.criar(video);
            if (!novoVideo) {
                throw new Error('Não foi possível cadastar o vídeo');
            }
            return res.status(200).json(novoVideo);
        } catch (error) {
            if (error.message === 'O corpo da requisição não pode ser vazio') {
                return res.status(400).json(error.message);
            }
            return res.status(500).json(error.message);
        }
    }

    static async atualizarVideo(req, res) {
        const { id } = req.params;
        const novosDados = req.body;
        try {
            const videoAtualizado = await videosServices.atualizar(
                novosDados,
                Number(id)
            );
            if (!videoAtualizado) {
                throw new Error('Não foi possível atualizar o vídeo');
            }
            return res
                .status(204)
                .json({ message: 'Atualização feita com sucesso' });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async removerVideo(req, res) {
        const { id } = req.params;
        try {
            const videoRemovido = await videosServices.remover(Number(id));
            if (!videoRemovido) {
                throw new Error('Não foi possível remover o vídeo');
            }
            return res
                .status(200)
                .json({ message: 'Exclusão feita com sucesso' });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = VideoController;
