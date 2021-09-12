import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Datalayer/StateProvider";
import "./Subtotal.css";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
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
  }, []);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal ({basket?.length} items) : <strong>{sum}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        decimalScale={2}
      />

      <button className="subtotal__btn">Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
