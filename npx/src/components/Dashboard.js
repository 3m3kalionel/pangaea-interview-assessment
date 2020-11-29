import React, { useState } from "react";

import Product from "./Product";
import Cart from "./Cart";
import "../styles/Dashboard.css";

const Dashboard = ({ refetch, data: { products }, currencyList }) => {
  const [cart, setCart] = useState([]);

  const getCartItem = (productId) =>
    cart.find((element) => element.id === productId);

  const handleAddCartItem = (product) => {
    const { id } = product;
    const cartItem = getCartItem(id);
    if (!cartItem) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      const newCart = cart.map((element) => {
        if (element.id === id) {
          return { ...product, quantity: cartItem.quantity + 1 };
        } else {
          return element;
        }
      });
      setCart(newCart);
    }
  };

  const deleteCartItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const handleRemoveCartItem = (product) => {
    const { id, quantity } = product;
    const cartItem = getCartItem(id);
    if (cartItem.quantity === 1) {
      deleteCartItem(product.id);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...product, quantity: quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  return (
    <div id="full-page">
      <div id="nav">
        <div id="left-section">
          <ul>
            <li>LUMIN</li>
            <li>Shop</li>
            <li>Learn</li>
          </ul>
        </div>
        <div id="right-section">
          <ul>
            <li>Account</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div id="header">
        <div id="header-lhs">
          <h1>All Products</h1>
          <h4>
            A 360<span>&#176;</span> look at Lunin
          </h4>
        </div>
        <div id="header-rhs">
          <select disabled name="filter" id="disabled-filter">
            <option>Filter by</option>
          </select>
        </div>
      </div>
      <div id="body">
        <div id="body-container">
          {products.map((product, key) => {
            return (
            <Product
                details={product}
                key={key}
                onIncrement={handleAddCartItem}
            />
            )
          })}
        </div>
        <Cart
          cart={cart}
          onIncrement={handleAddCartItem}
          onDecrement={handleRemoveCartItem}
          onDelete={deleteCartItem}
          refetch={refetch}
          currencyList={currencyList}
        />
      </div>
    </div>
  );
};

export default Dashboard;
