import { ADD_CART, DELETE_CART, UPDATE_CART } from "../constants/actionTypes";

const initialState = [];
let shoppingCart = JSON.parse(localStorage.getItem("listCart"));
let initial =
  shoppingCart != null && shoppingCart.length > 0 ? shoppingCart : initialState;

export const listCart = (state = initial, action) => {
  switch (action.type) {
    case ADD_CART:
      if (checkExist(state, action.payload.product.productId)) {
        let index = getIndexCart(state, action.payload.product.productId);
        state[index].quantity += parseInt(action.payload.quantity);
      } else {
        state.push(action.payload);
      }
      saveToLocalStorage(state);
      return [...state];
    case UPDATE_CART:
      let index = getIndexCart(state, action.payload.product.productId);
      state[index].quantity = action.payload.quantity;
      saveToLocalStorage(state);
      return [...state];
    case DELETE_CART:
      let newState = state.filter(
        (element) => element.product.productId !== action.payload
      );
      saveToLocalStorage(newState);
      return newState;
    default:
      return state;
  }
};
const checkExist = (arr, idProduct) => {
  let check = false;
  arr.forEach((element) => {
    if (element.product.productId === idProduct) {
      check = true;
    }
  });
  return check;
};
const getIndexCart = (carts, productId) => {
  for (let index = 0; index < carts.length; index++) {
    if (carts[index].product.productId === productId) {
      return index;
    }
  }
  return -1;
};
const saveToLocalStorage = (arr) => {
  localStorage.setItem("listCart", JSON.stringify(arr));
};
