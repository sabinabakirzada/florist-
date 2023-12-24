import React from "react";
import "./index.scss";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1 className="logo">Floral Studio</h1>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#" className="text">Portfolio</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </nav>
          <IoMenu className="menu-icon"/>
        </div>
      </div>
    </header>
  );
};

export default Header;