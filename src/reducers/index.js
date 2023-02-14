import { combineReducers } from "redux";
import { listCart } from "./listCart";
import { listProduct } from "./listProduct";
import { notify } from "./notify";

export const reducer = combineReducers({ listProduct, listCart, notify });
