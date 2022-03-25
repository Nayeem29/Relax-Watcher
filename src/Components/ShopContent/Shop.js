import React, { useEffect, useState } from 'react';
import Products from './Products/Products';
import './Shop.css';

const Shop = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setWatches(data))
  }, []);

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {
          watches.map(watch => <Products key={watch._id} product={watch}></Products>)
        }
      </div>
      <div className="cart-container">
        <p>this is Cart</p>
      </div>
    </div>
  );
};

export default Shop;