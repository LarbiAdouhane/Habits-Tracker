import React from "react";
import { useNavigate } from "react-router-dom";
import "./homePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="containerr">
      <h2 className="title">
        <span style={{ color: "black" }}>Welcome to </span>
        <span style={{ color: "rgb(55,45,167)" }}>Digital Habit Trackers</span>
      </h2>
      <p className="paragraph">
        Habit tracker digital est une application innovante...
      </p>
      <button className="btn-primary" onClick={() => navigate("/signin")}>
        Sign In
      </button>
      <button className="btn-primary" onClick={() => navigate("/signup")}>
        Sign Up
      </button>
    </div>
  );
}

export default HomePage;

