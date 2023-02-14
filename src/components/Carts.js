import React from "react";
import { useSelector } from "react-redux";
import CartFooter from "./CartFooter";
import CartItem from "./CartItem";

export default function Carts() {
  let listCart = useSelector((state) => state.listCart);
  let notify = useSelector((state) => state.notify);
  let elementCart = listCart.map((cart, index) => (
    <CartItem key={cart.product.productId} stt={index + 1} cart={cart} />
  ));
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th width="4%">#</th>
                <th>Pokemon</th>
                <th width="15%">Price</th>
                <th width="4%">Quantity</th>
                <th width="20%">Subtotal</th>
                <th width="25%">Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">{elementCart}</tbody>
            <tfoot id="my-cart-footer">
              <CartFooter />
            </tfoot>
          </table>
        </div>
      </div>
      <div
        className={`alert alert-${notify.class}`}
        role="alert"
        id="mnotification"
      >
        {notify.message}
      </div>
    </div>
  );
}
