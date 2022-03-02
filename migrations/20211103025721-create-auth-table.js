'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('auth', { 
            id: {
				type: Sequelize.INTEGER,
				primaryKey:true,
				autoIncrement:true,
				allowNull:false
			},
            username: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updateAt: Sequelize.DATE,
            allowNull: false
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('auth');
    }
};
