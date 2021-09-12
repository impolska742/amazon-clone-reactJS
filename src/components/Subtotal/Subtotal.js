import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal (0 items) : <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        decimalScale={2}
      />

      <button className="subtotal__btn">Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
