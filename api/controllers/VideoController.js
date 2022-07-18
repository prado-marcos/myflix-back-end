const { VideosServices } = require("../services");
const videosServices = new VideosServices();

class VideoController {
    static async listarVideos(_req, res) {
        try {
            const videos = await videosServices.listar();
            if (videos.length === 0) {
                return res.status(200).json({ message: "Não há nenhum vídeo" });
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
                return res.status(200).json({ message: "Não há nenhum vídeo" });
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
            if (video) {
                return res.status(200).json(video);
            } else {
                throw new Error("Vídeo não encontrado");
            }
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async acessarVideoPorTitulo(req, res) {
        const { search } = req.query;
        try {
            const video = await videosServices.acessarPorTitulo(String(search));
            if (video) {
                return res.status(200).json(video);
            } else {
                throw new Error("Vídeo não encontrado");
            }
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async cadastarVideo(req, res) {
        const video = req.body;
        try {
            const novoVideo = await videosServices.criar(video);
            if (novoVideo) {
                return res.status(200).json(novoVideo);
            } else {
                throw new Error("Não foi possível cadastar o vídeo");
            }
        } catch (error) {
            res.status(500).json(error.message);
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
            if (videoAtualizado) {
                return res
                    .status(200)
                    .json({ message: "Atualização feita com sucesso" });
            } else {
                throw new Error("Não foi possível atualizar o vídeo");
            }
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async removerVideo(req, res) {
        const { id } = req.params;
        try {
            const videoRemovido = await videosServices.remover(Number(id));
            if (videoRemovido) {
                return res
                    .status(200)
                    .json({ message: "Exclusão feita com sucesso" });
            } else {
                throw new Error("Não foi possível remover o vídeo");
            }
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = VideoController;
