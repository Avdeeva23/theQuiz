"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Угадайте, это Россия или нет?",
          options: `Да это же Байкал! Не обманете (1)\r\n
          Очень похоже на североамериканские Великие озера.(2)`,
          answer: "1",
          photo:
            "https://cdn.culture.ru/images/cd450866-462b-52d3-bbf2-00ceb362c2a6/c_fill,g_center/1-jpg.webp",
          categoryId: 1,
        },
        {
          question: "Угадайте, это Россия или нет?",
          options: `Это Хибины — горный массив на Кольском полуострове (1).\n
Видимо, на фото — радужные горы в Перу (2).`,
          answer: "2",
          photo:
            "https://cdn.culture.ru/images/9af9392a-be81-5fb3-b6d3-6c01021fad0f/c_fill,g_center/2-jpg.webp",
          categoryId: 1,
        },
        {
          question: "Угадайте, это Россия или нет?",
          options: `Как много соли… Должно быть, это российское озеро Баскунчак (1).\n
Так это же Мертвое море, его сложно с чем-то спутать (2).`,
          answer: "1",
          photo:
            "https://cdn.culture.ru/images/a5b6d6e1-6275-5a4e-b6ec-7a05e730c3a9/c_fill,g_center/3-jpg.webp",
          categoryId: 1,
        },
        {
          question: "Угадайте, это Россия или нет?",
          options: `Это Ключевская Сопка, знаменитый камчатский вулкан. (1)\n
Это гора Фудзияма: на всех фото из соцсетей она именно так выглядит.(2)`,
          answer: "1",
          photo:
            "https://cdn.culture.ru/images/5bb54967-22e1-53d7-98c7-58a3d80b5684/c_fill,g_center/4-png.webp",
          categoryId: 1,
        },
        {
          question: "Угадайте, это Россия или нет?",
          options: `Родные лавандовые поля в Крыму.(1)
Разумеется, это знаменитый Прованс.(2)`,
          answer: "2",
          photo:
            "https://cdn.culture.ru/images/c0c8adfa-ee87-51fd-bb38-4cea73549d5a/c_fill,g_center/5-jpg.webp",
          categoryId: 1,
        },
        {
          question: "Угадайте, это Россия или нет?",
          options: `Это курорт Мацеста в городе Сочи. (1)
На фото — термальные источники Памуккале в Турции. (2)`,
          answer: "2",
          photo:
            "https://cdn.culture.ru/images/9ea4808d-432c-5eb0-bcd3-d820a26c3e77/c_fill,g_center/10-jpg.webp",
          categoryId: 1,
        },
        {
          question:
            "Если в Пермском крае﻿ вас назвали тыковкой, на что вам намекают?",
          options: ``,
          answer: "2",
          photo:
            "https://cdn.culture.ru/images/9ea4808d-432c-5eb0-bcd3-d820a26c3e77/c_fill,g_center/10-jpg.webp",
          categoryId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
