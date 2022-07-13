"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Videos extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Videos.belongsTo(models.Categorias, {
                foreignKey: "categoriaId",
            });
        }
    }
    Videos.init(
        {
            titulo: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Título não pode ser vazio",
                    },
                },
            },
            descricao: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: "Descrição não pode ser vazia",
                    },
                },
            },
            url: {
                type: DataTypes.STRING,
                validate: {
                    isUrl: {
                        msg: "Formato inválido de ULR",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "Videos",
        }
    );
    return Videos;
};
