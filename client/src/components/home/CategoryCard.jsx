import React from "react";

function CategoryCard({ category }) {
  return (
    <div className="card mt-20" style={{ width: "18rem" }}>
      <img src={`${category.photo}`} className="card-img-top" alt="category_img"></img>
      <div className="card-body">
        <h5 className="card-title">Тест: {category.title}</h5>
        <a href={`/${category.id}`} className="btn btn-primary">
          Перейти
        </a>
      </div>
    </div>
  );
}

export default CategoryCard;
