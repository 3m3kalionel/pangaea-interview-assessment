import React from "react";

import CartItem from "./CartItem";
import "../styles/Cart.css";

const Cart = (props) => {
  const {
    cart,
    onIncrement,
    onDecrement,
    onDelete,
    refetch,
    currencyList,
  } = props;

  const total = cart.reduce((acc, obj) => {
    acc += obj.price * obj.quantity;
    return acc;
  }, 0);

  return (
    <div id="cart">
      <div id="cart-title">
        <h5>YOUR CART</h5>
      </div>
      <div>
      <select onChange={(event) => refetch({ currency: event.target.value })}>
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
          />
        ))}
      </div>

      <div id="fixed-footer">
        <div id="details">
          <div>Subtotal</div>
          <span>{`${total.toFixed(2)}`}</span>
        </div>

        <button id="subscribe">MAKE THIS A SUBSCRIPTION (SAVE20%)</button>
        <button id="checkout">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
