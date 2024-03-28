import React from "react";
import "./footer.css";

import logo from "../../assets/logo1-NoBg.png";

const Footer = () => {
  return (
    <footer>
      <div className="logo_footer">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <div className="contact">
        <p>Email: littlelemon@example.com</p>
        <p>Address: Caribbean Sea</p>
        <p>Tel: +999 123 6548 455</p>
      </div>
    </footer>
  );
};

export default Footer;
