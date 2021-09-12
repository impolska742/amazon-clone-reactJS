import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout Page Advertisement"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        <h2>The Subtotal will go here</h2>
      </div>
    </div>
  );
};

export default Checkout;
