import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import './Header.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

