import React from "react";
import { useStateValue } from "../../Datalayer/StateProvider";
import "./BasketItem.css";

const BasketItem = ({ id, title, img, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="basketItem">
      <div className="basketItem__left">
        <img className="basketItem__img" src={img} alt="Basket Item" />
      </div>
      <div className="basketItem__right">
        <strong className="basketItem__title">{title}</strong>
        <p className="basketItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>⭐</p>;
            })}
        </div>
        <button onClick={removeFromCart} className="basketItem__removeBtn">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
