const { VideosServices } = require("../services");
const videosServices = new VideosServices();

class VideoController {
    static async acessarVideos(req, res) {
        try {
            const videos = await videosServices.getAll();
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
            const video = await videosServices.getById(Number(id));
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
            const newVideo = await videosServices.create(video);
            if (newVideo) {
                return res.status(200).json(newVideo);
            } else {
                throw new Error("Não foi possível cadastar o vídeo");
            }
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async atualizarVideo(req, res) {
        const { id } = req.params;
        const newData = req.body;
        try {
            const isVideoUpdated = await videosServices.update(
                newData,
                Number(id)
            );
            if (isVideoUpdated) {
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
            const isVideoRemoved = await videosServices.remove(Number(id));
            if (isVideoRemoved) {
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
