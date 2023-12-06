import express from "express";
import cookieParser from "cookie-parser";
import { db } from "./db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors());
app.listen(8800, () => {
  console.log("Connected!");
});

app.get("/meals", (req, res) => {
  const q = "SELECT * FROM meals";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/meals", (req, res) => {
  const q = "INSERT INTO meals (`title`, `desc`, `cover`, `price`) VALUES(?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Jelo stvoreno!");
  });
});

app.delete("/meals/:id", (req, res) => {
  const mealId = req.params.id;
  const q = "DELETE FROM meals WHERE id=?";
  db.query(q, [mealId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Obrisano jelo!");
  });
});

app.put("/meals/:id", (req, res) => {
  const mealId = req.params.id;
  const q =
    "UPDATE meals SET `title` = ?, `desc` = ?, `cover` = ?, `price` = ? WHERE id= ?";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];
  db.query(q, [...values, mealId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Ažurirano jelo!");
  });
});
