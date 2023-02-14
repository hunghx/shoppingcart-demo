import React from "react";
import { useSelector } from "react-redux";

export default function CartFooter() {
  let listCart = useSelector((state) => state.listCart);
  let size = listCart.length;
  let totalAmount = listCart.reduce(
    (total, cart) => total + cart.product.price * cart.quantity,
    0
  );

  return (
    <>
      {size === 0 ? (
        <tr>
          <th colSpan={6}>Empty product in your cart</th>
        </tr>
      ) : (
        <tr>
          <td colSpan={4}>
            There are <b>{size}</b> items in your shopping cart.
          </td>
          <td colSpan={2} className="total-price text-left">
            {totalAmount} USD
          </td>
        </tr>
      )}
    </>
  );
}
