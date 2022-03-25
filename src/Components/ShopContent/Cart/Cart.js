import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ selectedProducts }) => {
  // console.log(selectedProducts);
  const { picture, name } = selectedProducts;
  // console.log(name);
  return (
    <div>
      <div className="details">
        <img src={picture} alt="" />
        <h4>{name}</h4>
        <FontAwesomeIcon icon={faDeleteLeft} id='icon' />
      </div>
    </div>
  );
};

export default Cart;