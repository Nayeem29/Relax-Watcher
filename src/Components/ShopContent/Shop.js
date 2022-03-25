import React, { useEffect, useState } from 'react';
import { addToDataBase } from '../../Utilities/fakeStore';
import Cart from './Cart/Cart';
import Products from './Products/Products';
import './Shop.css';

const Shop = () => {
  const [watches, setWatches] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [hasItems, setHasItems] = useState(false);

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setWatches(data))
  }, []);

  // useEffect(() => {

  // }, [])

  const manageSelectedProduct = (selectedWatches) => {
    addToDataBase(selectedWatches._id);
    let newWisthListProducts = [];
    if (wishList.length >= 3) {
      setHasItems(true);
    }
    const exists = wishList.find(watch => watch._id === selectedWatches._id);
    if (!exists) {
      newWisthListProducts = [...wishList, selectedWatches];
      setWishList(newWisthListProducts);
    } else {
      alert('Product already Selected');
    }
    console.log(wishList.length);
  }

  const deleteWatch = (productId) => {
    const rest = wishList.filter(watch => watch._id !== productId);
    setWishList([...rest]);
    console.log((wishList.length));
    (wishList.length <= 3) ? setHasItems(false) : setHasItems(true);
  }

  const chooseRandomly = (products) => {
    let randomWatch = []
    for (const watch of products) {
      randomWatch = [...randomWatch, watch._id];
    }
    const pickedWatchID = randomWatch[Math.floor(Math.random() * randomWatch.length)];
    console.log(pickedWatchID);
    let pickedWatch = [];
    pickedWatch[0] = products.find(product => product._id === pickedWatchID);
    console.log(pickedWatch);
    setHasItems(false);
    setWishList(pickedWatch);
  }

  const chooseAgain = () => {
    setHasItems(false);
    setWishList([]);
  }

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {
          watches.map(watch => <Products key={watch._id} product={watch} manageSelectedProduct={manageSelectedProduct}
          ></Products>)
        }
      </div>
      <div className="cart-container">
        <div className="cart-container">
          <p>Order Summary:</p>
          {
            wishList.map(item => <Cart key={item.name} selectedProducts={item}
              deleteWatch={deleteWatch}></Cart>)

          }
        </div>
        {
          (hasItems) ? <div className="choose-option">
            <button onClick={() => chooseRandomly(wishList)}>
              <h5>Choose Randomly</h5>
            </button>
            <button onClick={() => chooseAgain()}>
              <h5>Choose Again</h5>
            </button>

          </div> : null
        }

      </div>
    </div>
  );
};

export default Shop;