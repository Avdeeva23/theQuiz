import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
function Home({ user, setUser }) {
  const [categories, setCategories] = useState([]);
  const [isUser, setIsUser] = useState(false);

  const getCategories = async () => {
    const categories = await axios.get("/api/");
    setCategories(categories.data);
  };

  const handlerUser = async () => {
    if (user) {
      setIsUser(true);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {isUser ? (
        <div>
          <h2 className="mb-5">Привет, {user}!</h2>
          <div style={{ display: "flex", gap: "20px" }} className="mt-20">
            {categories.map((category) => (
              <div key={category.id}>
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://wowquiz.ru/images/promo-image.png"
            style={{ width: "600px" }}
            className="mb-5"
          />
          <br />
          <input
            placeholder="введите ваше имя"
            style={{ width: "200px", paddingLeft: "10px", borderRadius:"6px", height: "35px"}}
            className="mb-4"
            type="text"
            onChange={(e) => setUser(e.target.value)}
          />
          <br />
          <button onClick={handlerUser}>Это я!</button>
        </div>
      )}
    </>
  );
}

export default Home;
