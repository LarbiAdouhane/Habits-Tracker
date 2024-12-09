import React from "react";
import { useNavigate } from "react-router-dom";
import "./homePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="containerr">
      <nav>
        <div className="logo">
          <a onClick={() => navigate("/")} href=""><h1> <span style={{color:'white'}}>Habit</span> <span style={{color:'black'}}>Tracker</span></h1></a>
        </div>
        <div>
          <ul className="nav-options">
            <a href=""><li></li>home</a>
            <a href=""><li></li>about</a>
            <a href=""><li></li>contact</a>
            <a href=""><li></li>updates</a>
          </ul>
        </div>
        <div className="auth">
          <button className="btn-primary" onClick={() => navigate("/signin")}>
            Sign In
          </button>
          <button className="btn-primary" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>

      </nav>

      <div className="hero">
        <h2 className="title">
          <span style={{ color: "white" }}>Welcome to </span>
          <span style={{ color: "black" }}>Digital Habit Trackers</span>
        </h2>
      </div>

    </div>
  );
}

export default HomePage;

