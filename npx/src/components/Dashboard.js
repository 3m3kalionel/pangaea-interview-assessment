import React, { useState, useEffect } from "react";

import Product from "./Product";
import "../styles/Dashboard.css";

const Dashboard = ({ data: { products } }) => (
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
            />
          );
        })}
      </div>
    </div>
  </div>
);

export default Dashboard;
