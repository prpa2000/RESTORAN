import React from "react";
import "../style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRef } from "react";
export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const { register } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value.length < 6)
      return setError("Lozinka mora imati najmanje 6 slova ili znamenki");
    if (passwordRef.current.value !== confirmpasswordRef.current.value) {
      return setError("Lozinke se ne podudaraju");
    }
    try {
      setError("");
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch {
      setError("Neuspješna registracija");
    }

    setLoading(false);
  }

  return (
    <div className="auth">
      <h1>REGISTRACIJA</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          ref={emailRef}
          required
          placeholder="email"
          name="email"
        ></input>
        <input
          pattern="[a-zA-Z0-9]{0,}"
          type="password"
          placeholder="lozinka"
          name="password"
          ref={passwordRef}
          required
        ></input>
        <input
          type="password"
          placeholder="potvrdi lozinku"
          name="confirm password"
          ref={confirmpasswordRef}
          required
        ></input>

        <button type="submit" disabled={loading}>
          Registracija
        </button>

        <span>
          Imate račun?{" "}
          <Link to="/">
            <span className="authspan">Prijava</span>
          </Link>
        </span>
      </form>
    </div>
  );
}
