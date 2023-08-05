import React from "react";
import "./styles.css";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers_contant mt-3 d-flex">
        <button>
          <h1 className="offersPersentage get10Off">GET 10&#37; OFF</h1>
          <p>on orders offers over &#36;39*</p>
        </button>
        <button>
          <h1 className="offersPersentage get20Off">GET 20&#37; OFF</h1>
          <p>on orders offers over &#36;59*</p>
        </button>
        <button>
          <h1 className="offersPersentage get30Off">GET 30&#37; OFF</h1>
          <p>on orders offers over &#36;99*</p>
        </button>
        <div className="discountCode">
          <button className="offerDiscount">CODE: DISCOUNT</button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
