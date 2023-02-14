import { ADD_CART, DELETE_CART, UPDATE_CART } from "../constants/actionTypes";

export const addToCart = (product, quantity) => {
  return {
    type: ADD_CART,
    payload: { product, quantity },
  };
};
export const deleteToCart = (idDel) => {
  return {
    type: DELETE_CART,
    payload: idDel,
  };
};
export const updateToCart = (product, quantity) => {
  return {
    type: UPDATE_CART,
    payload: { product, quantity },
  };
};
