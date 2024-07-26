import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
function Home() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const categories = await axios.get("/api/");
    setCategories(categories.data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div style={{display: "flex", gap: "20px"}} className="mt-20">
      {categories.map((category) => (
        <div  key={category.id}>
          <CategoryCard category={category} />
        </div>
      ))}
    </div>
  );
}

export default Home;
