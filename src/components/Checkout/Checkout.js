import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import BasketItem from "../BasketItem/BasketItem";
import { useStateValue } from "../../Datalayer/StateProvider";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout Page Advertisement"
        />
        <div className="checkout__basket">
          <h3>Hello, {user?.displayName || user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => {
            const { id, title, price, rating, img, factor } = item;
            return (
              <BasketItem
                id={id}
                title={title}
                price={price}
                rating={rating}
                img={img}
                factor={factor}
              />
            );
          })}
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
