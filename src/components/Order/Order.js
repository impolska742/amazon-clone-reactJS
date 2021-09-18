import React, { useEffect } from "react";
import "./Order.css";
import BasketItem from "../BasketItem/BasketItem";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  useEffect(() => {
    console.log(order);
  }, []);
  return (
    <div className="order">
      <h2 className="order__heading">Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mm a")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basketItems?.map((item) => (
        <BasketItem
          id={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          rating={item.rating}
          hideBtn={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total : {value}</h3>
        )}
        value={order.data.amount / 100}
        prefix="₹"
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
      />
    </div>
  );
};

export default Order;
