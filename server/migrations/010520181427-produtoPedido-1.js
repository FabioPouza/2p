module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("produtoPedido", {
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
            }
        });
    },
    down: queryInterface => {
        return queryInterface.dropTable("produtoPedido");
    }
};