import React, { useState } from "react";
import "./navBar.css";

import logoLarge from "../../assets/logo-large.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/home")}>
          <img
            onClick={() => navigate("/home")}
            src={logoLarge}
            alt="Big Lemon"
          />
        </div>
        <input type="checkbox" id="isShownMenu" />
        <div className="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <label htmlFor="isShownMenu" className="menu-toggle">
          <span>&#9776;</span>
        </label>
      </nav>
    </header>
  );
};

export default NavBar;
