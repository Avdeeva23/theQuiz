"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          question: "Угадайте, это Россия или нет?",
          options: `Да это же Байкал! Не обманете (1)\n
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
            "Если в Пермском крае вас назвали тыковкой, на что вам намекают?",
          options: `Что вы недалекий (1)\nЧто вы чудесный собеседник (2) \n
Что вы лезете не в свое дело (3) \n
Что вы слишком много времени проводите в огороде (4)`,
          answer: "3",
          photo:
            "https://cdn.culture.ru/images/6f834e7c-caa2-55f9-b97c-43fd4932e1e6/c_fill,g_center/perm-jpg.webp",
          categoryId: 2,
        },
        {
          question: "Что значит слово «сомжа» в Тверской области?",
          options: `Рыбалка и сом (1) \n
Сонливость и подушка (2) \n
Коса и сбор урожая (3) \n
Кулинария и пироги (4)`,
          answer: "2",
          photo:
            "https://cdn.culture.ru/images/8d7c3b25-b880-5289-91de-c129e673d315/c_fill,g_center/1-png.webp",
          categoryId: 2,
        },
        {
          question: "Чем отличается «жуклистый» человек? (Ярославская область)",
          options: `Сообразительностью (1)
Богатством (2)
Громким голосом (3)
Бойкостью (4)`,
          answer: "4",
          photo:
            "https://cdn.culture.ru/images/c529eb86-411e-5845-879c-3cc0417e2d6e/c_fill,g_center/yaroslavl-jpg.webp",
          categoryId: 2,
        },
        {
          question: "Кто «копызится» в Смоленске?",
          options: `Тот, кто ябедничает (1) \n
Тот, кто всегда опаздывает (2) \n
Тот, кто капризничает (3) \n
Тот, кто всюду торопится (4)`,
          answer: "3",
          photo:
            "https://cdn.culture.ru/images/2d2eabb6-4e8c-556a-88f4-85dbf4e62524/c_fill,g_center/smolensk-2-jpg.webp",
          categoryId: 2,
        },
        {
          question: "Кто такой (или кто такая) алалочка на Урале?",
          options: `Человек, который говорит чепуху (1) \n
Девушка маленького роста (2) \n
Очень громкая собака (3) \n
Парень, который быстро бегает (4)`,
          answer: "1",
          photo:
            "https://cdn.culture.ru/images/656679cd-f5d1-5c50-9b29-193fe2bab76b/c_fill,g_center/ekaterinburg-jpg.webp",
          categoryId: 2,
        },
        {
          question: "Если в Пскове человека назвали «измётный», то он…",
          options: `Неопрятный (1) \n
                    Опытный (2) \n
                    Привлекательный (3) \n
                    Негодный (4)`,
          answer: "4",
          photo:
            "https://cdn.culture.ru/images/97526a48-3605-54d8-aff6-b198ad919245/c_fill,g_center/pskov-jpg.webp",
          categoryId: 2,
        },
        {
          question: "Чем занимается костромской «поигральщик»?",
          options: `Музыкой и пением (1) \n
                    Ухаживаниями за девушками (2) \n
                    Заключением пари (3) \n
                    Изготовлением деревянных кукол (4)`,
          answer: "2",
          photo:
            "https://cdn.culture.ru/images/9f114fa5-cd4d-5331-862a-dac01143759d/c_fill,g_center/kostroma-jpg.webp",
          categoryId: 2,
        },
        {
          question: "Кого в Курске называют «нышпорка»?",
          options: `Музыкой и пением (1) \n
                    Ухаживаниями за девушками (2) \n
                    Заключением пари (3) \n
                    Изготовлением деревянных кукол (4)`,
          answer: "3",
          photo:
            "https://cdn.culture.ru/images/4e065cbb-918f-51dc-81ab-9b90e9f145b5/c_fill,g_center/kursk-jpg.webp",
          categoryId: 2,
        },
        {
          question: "Если мы спросим, «упазились» ли вы, то на Урале?",
          options: `Устали ли вы (1) \n
Узнали ли вы что-то новое (2) \n
Разозлились ли вы (3) \n
Стало ли вам скучно (4)`,
          answer: "1",
          photo:
            "https://cdn.culture.ru/images/627152d1-a6fa-5c37-9021-bc0bbe2098e5/c_fill,g_center/chelyabinsk-jpg.webp",
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
