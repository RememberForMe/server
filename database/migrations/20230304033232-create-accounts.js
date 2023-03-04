'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable('accounts', {
            id: {
                type: Sequelize.DataTypes.UUID,
                defaultValue: Sequelize.DataTypes.UUIDV4,
                primaryKey: true
            },
            email: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: true
            },
            username: {
                type: Sequelize.DataTypes.STRING(20),
                unique: true,
                allowNull: false
            },
            password: {
                type: Sequelize.DataTypes.STRING(10),
                allowNull: false
            },
            isActived: {
                type: Sequelize.DataTypes.BOOLEAN,
                defaultValue: true
            }
        })
    },

    async down (queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable('accounts')
    }
};
