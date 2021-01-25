import React from "react";
import { IconContext } from "react-icons";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import CurrencyFormat from "react-currency-format";

import CartItem from "./CartItem";
import "../styles/Cart.css";

const Cart = props => {
  const {
    cart,
    cartActions,
    refetch,
    currencyList,
    width,
    currencyDetails,
  } = props;

  const { onIncrement, onDecrement, onDelete, onToggle, onClick } = cartActions;
  const { selectedCurrency, defaultCurrency } = currencyDetails;

  const getCartPriceTotal = cart.reduce((acc, obj) => {
    acc += obj.price * obj.quantity;
    return acc;
  }, 0);

  return (
    <div id="cart" style={{ width }}>
      <div id="content-container">
        <div id="cart-title">
          <button id="close-cart">
            <IconContext.Provider value={{ size: "24px" }}>
              <IoArrowForwardCircleOutline onClick={onToggle} />
            </IconContext.Provider>
          </button>
          <h5>YOUR CART</h5>
        </div>
        <div>
          <select
            onChange={({ target: { value } }) => {
              refetch({ currency: value });
              onClick({
                ...currencyDetails,
                selectedCurrency: value,
              });
            }}
          >
            {currencyList.currency.map((currency, key) => (
              <option value={`${currency}`} key={key}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div>
          {cart.map((cartItem, key) => (
            <CartItem
              key={key}
              itemDetails={cartItem}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
              selectedCurrency={selectedCurrency}
            />
          ))}
        </div>

        <div id="fixed-footer">
          <div id="details">
            <div>Subtotal</div>
            <span>
              <CurrencyFormat
                value={getCartPriceTotal}
                thousandSeparator={true}
                displayType={"text"}
                decimalScale={2}
                fixedDecimalScale={true}
                prefix={`${selectedCurrency || defaultCurrency} `}
              />
            </span>
          </div>

          <button id="subscribe">MAKE THIS A SUBSCRIPTION (SAVE20%)</button>
          <button id="checkout">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
