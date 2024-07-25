'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Categories', [{
      title: 'FirstCategory'
        
      },
      {
         title: 'SecondCategory'
           
         }], {});
   
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
