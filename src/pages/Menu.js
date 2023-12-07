import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style.css";
const Menu = () => {
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAllMeals = async () => {
      try {
        const res = await axios.get("http://localhost:8800/meals");
        setMeals(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMeals();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/meals/" + id);
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div className="jelovnik">
      <h1 className="h1meals">JELA</h1>
      <div className="meals">
        {meals.map((meal) => (
          <div className="meal" key={meal.id}>
            <div className="mealdesc">
              {<img src={meal.cover} alt=""></img>}
              <h2>{meal.title}</h2>
              <p>{meal.desc}</p>
              <span>{meal.price}€</span>
              <div className="mealbtns">
                <button
                  className="delete"
                  onClick={() => handleDelete(meal.id)}
                >
                  Obriši
                </button>
                <button
                  className="update"
                  onClick={() => navigate(`/update/${meal.id}`)}
                >
                  Promijeni
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
