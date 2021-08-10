'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

         await queryInterface.createTable('restaurant_itens', { 
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true, 
                autoIncrement: true 
            },
            id_restaurant: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            name: {
                type: Sequelize.TEXT
            },
            description: {
                type: Sequelize.TEXT
            },
            value: {
                type: Sequelize.FLOAT
            },
            created_at: {
                type: Sequelize.DATE
            },
            update_at: {
                type: Sequelize.DATE
            }
        });
    },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
