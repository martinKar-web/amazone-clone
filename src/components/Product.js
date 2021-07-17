import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          The Lean StartUp
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
        </div>
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
        alt=""
      />

      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
