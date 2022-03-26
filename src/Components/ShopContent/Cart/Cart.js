import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ selectedProducts, deleteWatch }) => {
  // console.log(selectedProducts);
  const { picture, name } = selectedProducts;
  // console.log(name);
  return (
    <div className='cart'>
      <div className="details">
        <img src={picture} alt="" />
        <h4>{name}</h4>
        <button onClick={() => deleteWatch(selectedProducts._id)}>
          <FontAwesomeIcon icon={faDeleteLeft} id='icon' />
        </button>

      </div>
    </div>
  );
};

export default Cart;