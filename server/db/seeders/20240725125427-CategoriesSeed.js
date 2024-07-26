"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          title: "Угадайте, это Россия или нет?",
          photo: `https://cdn.culture.ru/images/cd450866-462b-52d3-bbf2-00ceb362c2a6/c_fill,g_center/1-jpg.webp`,
        },
        {
          title: "Знаете ли вы необычные слова из регионов России?",
          photo: `https://cdn.culture.ru/images/b9a62e21-f593-5f59-a3fd-7c4293b1772b/w_1020,c_fill,g_center/2-png.webp`
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
