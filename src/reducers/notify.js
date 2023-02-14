import { ADD_CART, DELETE_CART, UPDATE_CART } from "../constants/actionTypes";

const initialState = {
  class: "info",
  message: "Add to Cart",
};

export const notify = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      state = {
        class: "success",
        message: "Add successful",
      };
      return { ...state };
    case UPDATE_CART:
      state = {
        class: "warning",
        message: "Update successful",
      };
      return { ...state };
    case DELETE_CART:
      state = {
        class: "danger",
        message: "delete successful",
      };
      return { ...state };
    default:
      return state;
  }
};
