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
        await queryInterface.createTable('Profiles', {
            id: {
                type: Sequelize.DataTypes.UUID,
                defaultValue: Sequelize.DataTypes.UUIDV4,
                primaryKey: true
            },
            firstName: {
                type: Sequelize.DataTypes.STRING(20),
                allowNull: true
            },
            lastName: {
                type: Sequelize.DataTypes.STRING(10),
                allowNull: true
            },
            address: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: true
            },
            birthday: {
                type: Sequelize.DataTypes.DATEONLY,
                allowNull: true
            },
            accountId: {
                type: Sequelize.DataTypes.UUID,
                references: {
                    model: 'Accounts',
                    key: 'id'
                },
                allowNull: false,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            }
        });
    },

    async down (queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable('Profiles')
    }
};
