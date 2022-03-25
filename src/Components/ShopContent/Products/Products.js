import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = ({ product, manageSelectedProduct }) => {
  const { name, picture, price } = product;
  return (
    <div className='single-product'>
      <img src={picture} alt="" />
      <div className='info'>
        <div className="product-info">
          <p>Brand: {name}</p>
          <p>${price}</p>
        </div>
        <button className='add-to-cart' onClick={() => manageSelectedProduct(product)}>
          <p>Add to Cart</p>
          <FontAwesomeIcon icon={faShoppingCart} id='icon' />
        </button>
      </div>
    </div>
  );
};

export default Products;