import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-left">
            <img
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png"
              alt=""
            />
            <form>
              <input
                type="text"
                placeholder="Your Email"
                className="email-input"
              />
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="footer-right">
            <div>
              <h3>About</h3>
              <nav>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Partness</a>
                  </li>
                  <li>
                    <a href="#">Our Servicess</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h3>Contact</h3>
              <nav>
                <ul>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">FAQ Page</a>
                  </li>
                  <li>
                    <a href="#">About Me</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h3>Follow Us</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
