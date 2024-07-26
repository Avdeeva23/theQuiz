'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }
  Question.init({
    question: DataTypes.STRING,
    options: DataTypes.STRING,
    answer: DataTypes.STRING,
    photo: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};