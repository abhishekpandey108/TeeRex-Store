import {ADD_CART_ITEM, DECREASE_ITEM_QUANTITY, DELETE_CART_ITEM, GET_TOTAL_ITEM_PRICE, INCREASE_ITEM_QUANTITY,} from '../action/CartAction'
  
  const initialState = {
    cartData: [],
    totalPrice:0
  };
  
  export const CartReducer = (store = initialState, { type, payload }) => {
    switch (type) {
      case ADD_CART_ITEM:
        return { ...store, cartData: [...addToCart(store, payload)] }
      case DELETE_CART_ITEM:
        return { cartData: [...deleteItem(store, payload)] }
      case INCREASE_ITEM_QUANTITY:
        return { cartData: [...incrementQuantity(store.cartData,payload)] }
      case DECREASE_ITEM_QUANTITY:
        return { cartData: [...decrementQuantity(store.cartData,payload)] }
  
      default:
        return store;
    }
  };
  
  const deleteItem = (cart, id) => {
    let rest_cart_data = cart.cartData.filter((item) => item.id !== id);
    return rest_cart_data;
  };
  
  const addToCart = (cart, item) => {
    const temp = cart.cartData;
    let currentItem = { currentQuantity: 1, ...item };
    temp.push(currentItem);
    return temp;
  };
  
  const incrementQuantity=(cart,id)=>{
    return cart.filter((item)=>item.id===id?item.currentQuantity++:item)
  }

  const decrementQuantity=(cart,id)=>{
    return cart.filter((item)=>item.id===id && item.currentQuantity>1?item.currentQuantity--:item)
  }
  
