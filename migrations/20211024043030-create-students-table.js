'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('students', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey:true,
				autoIncrement:true,
				allowNull:false
			},
			name: {
				type: Sequelize.STRING,
				allowNull:false
			},
			rombel: {
				type: Sequelize.STRING,
				allowNull:false
			},
			rayon: {
				type: Sequelize.STRING,
				allowNull:false
			},
			image: {
				type: Sequelize.STRING,
				allowNull: false
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false
			},			
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('students');
	}
};
