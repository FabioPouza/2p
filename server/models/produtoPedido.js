var sequelize = require("../config/database/sequelize"),
    Sequelize = require("sequelize");

const ProdutoPedido = sequelize.define("produtoPedido", {
    idProduto: {
        type: Sequelize.INTEGER,
        references: {
            model: "produto",
            key: "_id",
            allowNull: true,
            onDelete: "SET NULL"
        }
    },
    idPedido: {
        type: Sequelize.INTEGER,
        references: {
            model: "pedido",
            key: "_id",
            allowNull: true,
            onDelete: "SET NULL"
        }
    },
    quantidade: { type: Sequelize.INTEGER, allowNull: false, require: true }
});

module.exports = ProdutoPedido;