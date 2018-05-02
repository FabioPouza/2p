module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("estabelecimentoLoja", {
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
    },

    down: queryInterface => {
        return queryInterface.dropTable("estabelecimentoLoja");
    }
};