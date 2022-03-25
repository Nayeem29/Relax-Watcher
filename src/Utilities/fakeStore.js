const addToDataBase = id => {
  // add quantity
  let shoppingCart = {};
  //get shopping Cart
  let storedCart = localStorage.getItem('shoppingCart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  let quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

const getShoppingCart = () => {
  let shoppingCart = {};
  //get shopping Cart
  let storedCart = localStorage.getItem('shoppingCart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
}

export { addToDataBase, getShoppingCart }