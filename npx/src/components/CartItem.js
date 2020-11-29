import React, { useEffect } from "react";

import "../styles/CartItem.css";

const CartItem = ({ itemDetails, onIncrement, onDecrement, onDelete }) => {
  const { image_url, price, quantity, title, id } = itemDetails;
  return (
    <div className="cart-item-detail">
      <div className="cart-item-detail-lhs">
        <div>
          <h6>{title}</h6>
        </div>
        <div>
          <button
            className="quantity-button"
            onClick={() => {
              onDecrement(itemDetails);
            }}
          >
            -
          </button>
          <button className="quantity-button">{quantity}</button>
          <button
            className="quantity-button"
            onClick={() => {
              onIncrement(itemDetails);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-item-detail-center">
        <span>{(price * quantity).toFixed(2)}</span>
      </div>
      <div className="cart-item-detail-rhs">
        <img src={image_url} alt={title} />
      </div>
      <span
        className="close-button"
        onClick={() => {
          onDelete(id);
        }}
      >
        x
      </span>
    </div>
  );
};

export default CartItem;
