import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Add = () => {
  const [meal, setMeal] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setMeal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!meal.title || !meal.desc || !meal.price || !meal.cover) {
      setError("Morate popuniti sva polja.");
      return;
    }
    try {
      await axios.post("http://localhost:8800/meals", meal);
      navigate("/menu");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="add-container">
      <div className="form">
        <h1 className="h1add">Dodaj novo jelo</h1>

        <label for="title">Ime jela</label>
        <input
          type="text"
          id="title"
          placeholder="Pizza Mexicana..."
          className="addinput"
          onChange={handleChange}
          name="title"
        ></input>
        <label for="desc">Opis jela</label>
        <input
          type="text"
          id="desc"
          className="addinput"
          placeholder="Velika pizza s... "
          name="desc"
          onChange={handleChange}
        ></input>
        <label for="price">Cijena jela</label>
        <input
          type="number"
          className="addinput"
          placeholder="8.90..."
          name="price"
          min="1"
          onChange={handleChange}
        ></input>
        <label for="cover">Slika jela</label>
        <input
          type="text"
          id="cover"
          className="addinput"
          placeholder="Link slike jela..."
          name="cover"
          onChange={handleChange}
        ></input>
        {error && <p className="error">{error}</p>}
        <button onClick={handleClick} className="formButton">
          Dodaj
        </button>
      </div>
    </div>
  );
};

export default Add;
