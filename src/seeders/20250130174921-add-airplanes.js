'use strict';
const {op} = require("sequelize")

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
   await queryInterface.bulkInsert("Airplanes", [
    {
      modelNumber:"Boeing 737",
      capacity:200,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelNumber:"Boeing 747",
      capacity:300,
      createdAt:new Date(),
      updatedAt:new Date()
    }
   ]) 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Airplanes", null, {[op.or]:[{modelNumber:"Boeing 737"},{modelNumber:"Boeing 747"}]}); //means only delete Boeing 737 and Boeing 747 and if keep this empty it will delete all
  }
};
