import React from "react";

function Header() {
  return (
    <header>
      <a href="index.html" className="logo">
        <span>C</span>hacks
      </a>
      <ul className="navlist">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="right-header">
        <a href="#" className="btn">
          Let's chat <i className="bx bx-message-dots"></i>
        </a>
        <div className="menu-icon">
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
