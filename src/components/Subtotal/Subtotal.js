import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router";
import { useStateValue } from "../../Datalayer/StateProvider";
import "./Subtotal.css";

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }] = useStateValue();
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
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        value={sum}
        prefix="$"
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
      />

      <button
        onClick={(e) => history.push("/payment")}
        className="subtotal__btn"
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default Subtotal;
