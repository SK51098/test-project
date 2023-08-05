import React from "react";
import "./styles.css";

const MustHave = () => {

  return (
    <div className="mustHave">
      <h3 className="text-center mt-5 mb-3">#MUST Have</h3>
      <img src={require("../../../../common/images/carousel-img-1.png")} alt="" className="mb-3"/>
      <img src={require("../../../../common/images/carousel-img-2.png")} alt="" />
    </div>
  );
};

export default MustHave;
