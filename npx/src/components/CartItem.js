import React from "react";
import CurrencyFormat from "react-currency-format";

import "../styles/CartItem.css";

const CartItem = ({
  itemDetails,
  onIncrement,
  onDecrement,
  onDelete,
  selectedCurrency,
}) => {
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
        <span>
          {`${selectedCurrency} `}
          <CurrencyFormat
            value={price * quantity}
            thousandSeparator={true}
            displayType={"text"}
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </span>
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
