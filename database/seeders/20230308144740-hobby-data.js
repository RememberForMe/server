'use strict';
const { v4 } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        const hobbys = [
            'music', 
            'photography', 
            'movies', 
            'technology', 
            'traveling', 
            'running',
            'fashion',
            'sneaker',
            'sport shoe',
            'jewelry'
        ]

        await queryInterface.bulkInsert('hobbys', hobbys.map(hobby => ({
            id: v4(),
            name: hobby
        })))
    },

    async down (queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('hobbys', null, {})
    }
};
