const homeRouter = require("express").Router();

const { where } = require("sequelize");
const { Category, Question } = require("../db/models");


homeRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

homeRouter.get("/:id", async (req, res) => {
    try {
        const {id}= req.params
      const  questions= await Question.findAll({where: {categoryId:id}, order: [["id", "ASC"]]});
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  





module.exports = homeRouter;
