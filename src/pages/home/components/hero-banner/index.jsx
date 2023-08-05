import React from "react";
import "./styles.css";

const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="heroBanner_contant d-flex">
        <img
          src={require("../../../../common/images/header-img-1.png")}
          className="banner__Image"
          alt=""
        />
        <div className="banner__Content">
            <div>Set Your Style</div>
            <h1 className="mt-2 mb-2">INSTILEY</h1>
            <p>Neque Porro quisquam eat qui dolorem ipsum quia dolor sit amet conseletur adipisci velit sed quia non numquam eius modi tempora incidunto</p>
            <div>
              <button className="banner__buttons me-3 h5">SHOP WOMEN</button>
              <button className="banner__buttons h5">SHOP MEN</button>
            </div>
        </div>
        <img
          src={require("../../../../common/images/header-img-2.png")}
          className="banner__Image"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroBanner;
