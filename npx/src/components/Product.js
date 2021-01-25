import React from "react";
import CurrencyFormat from "react-currency-format";

const Product = ({
  details,
  onIncrement,
  onToggle,
  currencyDetails,
  onClick,
}) => {
  const { image_url, title, price } = details;
  const { defaultCurrency, selectedCurrency } = currencyDetails;

  return (
    <div className="product">
      <img className="product-image" src={image_url} alt={title} />
      <div className="product-description">
        <p className="title">{title}</p>
        <p className="cost">
          {`From `}
          <CurrencyFormat
            value={price}
            thousandSeparator={true}
            displayType={"text"}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={`${selectedCurrency || defaultCurrency} `}
          />
        </p>
      </div>
      <button
        className="add-to-cart-button"
        onClick={() => {
          onIncrement(details);
          onToggle(false);
          onClick({
            ...currencyDetails,
            selectedCurrency: selectedCurrency || defaultCurrency,
          });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
