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


  //add to cart function
  const manageSelectedProduct = (selectedWatches) => {
    addToDataBase(selectedWatches._id);
    let newWisthListProducts = [];

    const exists = wishList.find(watch => watch._id === selectedWatches._id);
    if (!exists) {
      newWisthListProducts = [...wishList, selectedWatches];
      if (newWisthListProducts.length < 4) {
        setHasItems(false);
        setWishList(newWisthListProducts);
      } else if (newWisthListProducts.length === 4) {
        setHasItems(true);
        setWishList(newWisthListProducts);
      } else {
        setHasItems(true);
        alert('Please Order max 4 items!');
      }

    } else {
      alert('Product already Selected');
    }

  }

  //delete btn
  const deleteWatch = (productId) => {
    const rest = wishList.filter(watch => watch._id !== productId);
    setWishList([...rest]);
    console.log((wishList.length));
    (wishList.length <= 4) ? setHasItems(false) : setHasItems(true);
  }

  //pick random watch
  const chooseRandomly = (products) => {
    let randomWatch = []
    for (const watch of products) {
      randomWatch = [...randomWatch, watch._id];
    }
    // console.log(randomWatch.length);
    const pickedWatchID = randomWatch[Math.floor(Math.random() * randomWatch.length)];
    console.log(pickedWatchID);
    let pickedWatch = [];
    pickedWatch[0] = products.find(product => product._id === pickedWatchID);
    console.log(pickedWatch);
    setHasItems(false);
    setWishList(pickedWatch);
  }

  //remove all watch
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
        <p>Order Summary:</p>
        {
          wishList.map(item => <Cart key={item.name} selectedProducts={item}
            deleteWatch={deleteWatch}></Cart>)

        }
        {
          (hasItems) ? <div className="choose-option">
            <button onClick={() => chooseRandomly(wishList)}>
              <h5>Choose 1 Randomly</h5>
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