import React from "react";
import "./index.scss";
const FloristLorem = () => {
  return (
    <div className="floristlorem">
      <div className="floristtext">
        <h2>Local Florist Just For You</h2>
        <p>
          Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent
          ullamcorper ius no. Te tibique intellegam mediocritatem his, est quis.
        </p>
        <p className="p2">Mary Byrd, owner</p>
        <img
          src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png"
          alt=""
        />
      </div>
      <div className="floristimg">
        <img
          className="img1"
          src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/fl1.jpg"
          alt=""
        />
        <img
          className="img2"
          src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/fl2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default FloristLorem;
