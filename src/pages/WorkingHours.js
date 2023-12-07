import React from "react";
import "../style.css";
const WorkingHours = () => {
  return (
    <div className="workinghours-container">
      <div className="workinghours">
        <div class="satnica">
          <h1>Ponedjeljak</h1>
          <p>09:00-23:00</p>
          <h1>Utorak</h1>
          <p>09:00-23:00</p>
          <h1>Srijeda</h1>
          <p>09:00-23:00</p>
          <h1>Četvrtak</h1>
          <p>09:00-23:00</p>
          <h1>Petak</h1>
          <p>09:00-00:00</p>
          <h1>Subota</h1>
          <p>09:00-00:00</p>
          <h1>Nedjelja</h1>
          <p>12:00-22:00</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
