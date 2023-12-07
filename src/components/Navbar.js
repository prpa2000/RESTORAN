import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  return (
    <div className="navbar">
      <div className="container">
        <div className="aboutus">
          <Link to="/aboutus">
            <a className="navbar-a">O nama</a>
          </Link>
        </div>
        <div className="aboutus">
          <Link to="/menu">
            {" "}
            <a className="navbar-a"> Jelovnik</a>
          </Link>
        </div>
        <Link to="/workinghours">
          {" "}
          <a>Radno vrijeme</a>
        </Link>

        <Link to="/contact">
          {" "}
          <a>Kontakt</a>
        </Link>
        <Link to="/add">
          {" "}
          <a>Dodaj</a>
        </Link>
        <Link to="/" onClick={() => logout()}>
          {" "}
          <a>Odjava</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
