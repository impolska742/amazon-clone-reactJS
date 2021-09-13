import React from "react";
import { useStateValue } from "../../Datalayer/StateProvider";
import "./Product.css";

const Product = ({ id, title, img, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // Dispatch the item into the data-layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>⭐</p>;
            })}
        </div>
      </div>

      <img className="product__img" src={img} alt="The Lean Startup" />
      <button onClick={addToBasket} className="product__btn">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
