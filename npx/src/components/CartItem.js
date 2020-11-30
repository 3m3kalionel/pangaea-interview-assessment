import React from "react";

import "../styles/CartItem.css";

const CartItem = ({ itemDetails, onIncrement, onDecrement, onDelete }) => {
  const { image_url, price, quantity, title, id } = itemDetails;
  return (
    <div className="cart-item-detail">
      <div className="cart-item-detail-lhs">
        <div>
          <h6 className="product-title">{title}</h6>
        </div>
        <div className="quantity-buttons-container">
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
