import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router";
import { getBasketTotal } from "../../Datalayer/reducer";
import { useStateValue } from "../../Datalayer/StateProvider";
import "./Subtotal.css";

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }] = useStateValue();

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
        value={getBasketTotal(basket)}
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
