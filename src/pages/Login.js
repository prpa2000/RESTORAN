import React, { useRef, useState } from "react";
import "../style.css";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch {
      setError("Prijava neuspješna");
    }

    setLoading(false);
  }

  return (
    <div className="auth">
      <h1>PRIJAVA</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input required type="email" placeholder="email" ref={emailRef}></input>

        <input
          required
          type="password"
          placeholder="lozinka"
          ref={passwordRef}
          name="password"
        ></input>
        <button onClick={handleSubmit} disabled={loading}>
          Prijava
        </button>

        <span>
          Nemate račun?{" "}
          <Link to="/register">
            <span className="authspan">Registracija</span>
          </Link>
        </span>
      </form>
    </div>
  );
}
