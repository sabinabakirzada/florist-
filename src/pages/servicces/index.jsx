import React from "react";
import "./index.scss";
const Floralservice = () => {
  return (
    <div className="services">
      <h5>Services</h5>
      <p>
        We offer a variety of floral services, from unique bouquets to event
        decoration.
      </p>
      <div className="cards">
        <div className="card">
          <div className="cardimg">
            <img
              className="cardimg"
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg"
              alt=""
            />
          </div>
          <div className="cardtext">Decoration</div>
        </div>

        <div className="card">
          <div className="cardimg">
            <img
              className="cardimg"
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b3.jpg"
              alt=""
            />
          </div>
          <div className="cardtext">Floral Design</div>
        </div>

        <div className="card">
          <div className="cardimg">
            <img
              className="cardimg"
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b2.jpg"
              alt=""
            />
          </div>
          <div className="cardtext">Events</div>
        </div>
      </div>

      <div className="ourmission">
        <div className="ourtext">
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore
            dicunt an, ea civibus.
          </p>
          <button>Read more</button>
        </div>
        <div className="ourimg">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Floralservice;
