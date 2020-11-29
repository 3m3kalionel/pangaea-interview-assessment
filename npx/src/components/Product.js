import React from "react";

const Product = ({ details, onIncrement }) => {
  const { image_url, title, price } = details;
  return (
    <div className="product">
      <img className="product-image" src={image_url} alt={title} />
      <div className="product-description">
        <p className="title">{title}</p>
        <p className="cost">From {price}</p>
      </div>
      <button
        className="add-to-cart-button"
        onClick={() => onIncrement(details)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
