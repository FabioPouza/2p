var sequelize = require("../config/database/sequelize"),
    Sequelize = require("sequelize");

const EstabelecimentoLoja = sequelize.define("estabelecimentoLoja", {
    idEstabelecimento: {
        type: Sequelize.INTEGER,
        references: {
            model: "estabelecimento",
            key: "_id",
            allowNull: true,
            onDelete: "SET NULL"
        }
    },
    idLoja: {
        type: Sequelize.INTEGER,
        references: {
            model: "loja",
            key: "_id",
            allowNull: true,
            onDelete: "SET NULL"
        }
    }
});

module.exports = EstabelecimentoLoja;