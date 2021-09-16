import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "../../Datalayer/StateProvider";

import "./Payment.css";
import BasketItem from "../BasketItem/BasketItem";
import CurrencyFormat from "react-currency-format";
const Payment = () => {
  const [{ basket, user }] = useStateValue();
  const [sum, setSum] = useState(0);

  const totalValue = () => {
    let sum = 0;
    basket.forEach((item) => {
      sum += item.price;
    });
    setSum(sum);
  };

  useEffect(() => {
    totalValue();
  }, [basket?.length]);

  return (
    <div className="payment">
      <h1 className="payment__heading">
        Checkout{" "}
        <span className="payment_headingItems">({basket.length} items)</span>
      </h1>
      <div className="payment__container">
        <div className="payment__address">
          <div className="payment__addressLeft">
            <strong>Delivery Address</strong>
          </div>
          <div className="payment__addressRight">
            <p>{user?.displayName || user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__cart">
          <div className="payment__cartLeft">
            <strong>Review Items and Delivery</strong>
          </div>
          <div className="payment__cartRight">
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
        <div className="payment__method">
          <div className="payment__methodLeft">
            <strong>Payment Method</strong>
          </div>
          <div className="payment__methodRight">
            <strong>Card Details</strong>
            <CurrencyFormat
              renderText={(value) => (
                <div className="payment__buyNowContainer">
                  <p>
                    <strong>Order Total : {value}</strong>
                  </p>
                  <button className="payment__buyNowButton amazonBtn">
                    Buy Now
                  </button>
                </div>
              )}
              value={sum}
              prefix="$"
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
