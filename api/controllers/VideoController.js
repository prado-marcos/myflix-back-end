const db = require("../models");

class VideoController {
    static async acessarVideos(req, res) {
        try {
            const videos = await db.Videos.findAll();
            return res.status(200).json(videos);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarVideoPorId(req, res) {
        try {
            const { id } = req.params;
            const video = await db.Videos.findOne({
                where: { id: Number(id) },
            });
            return res.status(200).json(video);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async cadastarVideo(req, res) {
        try {
            const video = req.body;
            const novoVideo = await db.Videos.create(video);
            return res.status(200).json(novoVideo);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async atualizarVideo(req, res) {
        try {
            const { id } = req.params;
            const novaInfo = req.body;
            await db.Videos.update(novaInfo, { where: { id: Number(id) } });
            return res
                .status(200)
                .json({ message: "Atualização feita com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async removerVideo(req, res) {
        try {
            const { id } = req.params;
            await db.Videos.destroy({ where: { id: Number(id) } });
            return res
                .status(200)
                .json({ message: "Exclusão feita com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = VideoController;
