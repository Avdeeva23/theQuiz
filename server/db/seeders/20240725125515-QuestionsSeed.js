'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('Questions', [{
        question: 'Why?',
        answer: 'John Doe',
        photo: '123photo',
        categoryId: 1
     },
     {
      question: 'Why2?',
      answer: 'John Doe2',
      photo: '123photo2',
      categoryId: 1
   }], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Questions', null, {});
     
  }
};