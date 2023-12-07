import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from "./components/Navbar";

import "./style.css";
import React from "react";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Add from "./pages/Add";
import Contact from "./pages/Contact";

import WorkingHours from "./pages/WorkingHours";
import Update from "./pages/Update";
import PrivateRoute from "./pages/PrivateRoute";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),

    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/add",
        element: <Add></Add>,
      },

      {
        path: "/workinghours",
        element: <WorkingHours></WorkingHours>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
