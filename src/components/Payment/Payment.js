import React, { useEffect, useState } from "react";
import "./Payment.css";
import axios from "../../axios";
import { useStateValue } from "../../Datalayer/StateProvider";
import BasketItem from "../BasketItem/BasketItem";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../../Datalayer/reducer";
import { useHistory } from "react-router";

const Payment = () => {
  const history = useHistory();
  const [{ basket, user }] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // get the special stripe secret which allows use to charge a customer
    const getClientSecret = async () => {
      const response = await axios.post(
        // Stripe expects the total in currencies sub - units
        `/payments/create?total=${getBasketTotal(basket) * 100}`
      );
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        setSucceeded(true);
        setProcessing(false);
        setError(null);

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? error.message : "");
  };

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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__buyNowContainer">
                <CurrencyFormat
                  renderText={(value) => <strong>Order Total : {value}</strong>}
                  value={getBasketTotal(basket)}
                  prefix="$"
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={2}
                />
                <button
                  disabled={processing || disabled || succeeded}
                  className="payment__buyNowButton amazonBtn"
                >
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>
              </div>
              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
