import React from 'react';
import './Products.css'

const Products = ({ product }) => {
  const { name, picture, price } = product;
  return (
    <div className='single-product'>
      <img src={picture} alt="" />
      <div className='info'>
        <p>{name}</p>
        <p>{price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Products;