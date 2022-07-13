"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Videos",
            [
                {
                    titulo: "Bring Me The Horizon - Can You Feel My Heart",
                    descricao:
                        "`Can You Feel My Heart` by Bring Me The Horizon",
                    url: "https://www.youtube.com/watch?v=QJJYpsA5tv8&ab_channel=BMTHOfficialVEVO",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    titulo: "Fabulous Secret Powers",
                    descricao: "`HEHEYYEYAAEYAAAEYAEYAA` / `He-Man Sings`",
                    url: "https://www.youtube.com/watch?v=FR7wOGyAzpw&list=PLHEBsC_NxJ_R3KnXJa4BfF7NEbnNvW_jg&ab_channel=slackcircus",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    titulo: "5 Hours of Super Mario Music",
                    descricao: "5 Hours of Super Mario Music",
                    url: "https://www.youtube.com/watch?v=KCiVG6mTor0&ab_channel=Josiaal",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    titulo: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
                    descricao:
                        "The official video for `Never Gonna Give You Up` by Rick Astley",
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    titulo: "SiM - The Rumbling (Anime Special Ver.)",
                    descricao: `“The Rumbling” (Anime Special Ver.)
                    Director : Motohiro Ishii (Ray)
                    Producer : Masako Yoshikawa (Ray)`,
                    url: "https://www.youtube.com/watch?v=DSMuhzSgOGE&ab_channel=SiMOfficialYouTubeChannel",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Videos", null, {});
    },
};
