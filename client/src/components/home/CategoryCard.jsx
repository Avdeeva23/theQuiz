import React from "react";

function CategoryCard({ category }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="category_img"></img>
      <div className="card-body">
        <h5 className="card-title">Заголовок: {category.title}</h5>
        <p className="card-text">Небольшой пример текста</p>
        <a href="#" className="btn btn-primary">
          Перейти
        </a>
      </div>
    </div>
  );
}

export default CategoryCard;
