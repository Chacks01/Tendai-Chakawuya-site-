import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <nav className="banner" id="home">
      <ul className="navlist">
        <li>
          <a href="#about">ABOUT </a>
        </li>
        <li>
          <Link to='/portfolio'>PORTFOLIO </Link>
        </li>
        <li>
          <a href="#">
            
            <span>TENDAI CHACKS </span>
          </a>
        </li>
        <li>
          <a href="#companies">COMPANIES </a>
        </li>
        <li>
          <a href="#contact">CONTACT </a>
        </li>
      </ul>
      
      <div className="main-text">
      <h1>TENDAI CHACKS</h1>
      </div>
    </nav>
  );
};
export default MainHeader;
