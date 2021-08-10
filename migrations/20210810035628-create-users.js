'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        await queryInterface.createTable('users', { 
            id: {
                type: Sequelize.INTEGER, 
                primaryKey: true, 
                autoIncrement: true 
            },
            username: {
                type: Sequelize.TEXT
            },
            email: {
                type: Sequelize.TEXT
            },
            password: {
                type: Sequelize.TEXT
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

     queryInterface.dropTable('users');
  }
};
