import React from "react";
import logo from "../Images/Frame 2 1.png";
import "./App.css";
const Navbar = () => {
  return (
    <div className="container">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
