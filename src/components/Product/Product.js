import React from "react";
import "./Product.css";

const Product = ({ id, title, img, price, rating }) => {
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
              return <p>⭐</p>;
            })}
        </div>
      </div>

      <img className="product__img" src={img} alt="The Lean Startup" />

      <button className="product__btn">Add to Basket</button>
    </div>
  );
};

export default Product;
