import React, { useState } from "react";
import "./navBar.css";

import logoLarge from "../../assets/logo-large.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img onClick={navigate("/home")} src={logoLarge} alt="Big Lemon" />
        </div>
        <div className={`menu ${isOpen ? "open" : ""}`}>
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
          <button className="menu-toggle" onClick={toggleMenu}>
            <span>&#9776;</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
