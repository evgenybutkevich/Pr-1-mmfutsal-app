module.exports = {
    up: async function (queryInterface, DataTypes) {
        await queryInterface.addColumn('players', 'avatar', {
            type: DataTypes.STRING
        });
    },

    down: async function (queryInterface, DataTypes) {
        // await queryInterface.removeColumn('players', 'avatar');
    }
};
