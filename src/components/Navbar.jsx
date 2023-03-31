import React from "react";
import logo from "../../assets/san.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarcontainer">
        <img className="logo" src={logo} alt="" />
        <div className="navlinks">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
