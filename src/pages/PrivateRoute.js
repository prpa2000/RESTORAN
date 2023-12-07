import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  if (children.type.name === "Data")
    return currentUser && currentUser.email === "test2@test2.com" ? (
      children
    ) : (
      <Navigate to="/home" />
    );
  return currentUser ? children : <Navigate to="/" />;
}
