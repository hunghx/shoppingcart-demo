import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteToCart, updateToCart } from "../actions";

export default function CartItem(props) {
  let { cart, stt } = props;
  const [quantity, setQuantity] = useState(1);
  let dispatch = useDispatch();
  console.log(cart);
  const handleDelete = () => {
    if (window.confirm("Bạn có chắc chắn muốn xoá thằng này không?")) {
      dispatch(deleteToCart(cart.product.productId));
    }
  };
  const handleUpdate = () => {
    dispatch(updateToCart(cart.product, quantity));
  };

  useEffect(() => {
    console.log(cart.quantity);
    if (cart.quantity > 0) {
      setQuantity(cart.quantity);
    }
  }, [cart.quantity]);
  return (
    <tr>
      <th scope="row">{stt}</th>
      <td>{cart.product.productName}</td>
      <td>{cart.product.price} USD</td>
      <td>
        <input
          name="cart-item-quantity-1"
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(+e.target.value)}
        />
      </td>
      <td>
        <strong>{cart.product.price * quantity} USD</strong>
      </td>
      <td>
        <a
          className="label label-info update-cart-item"
          href="#"
          data-product=""
          onClick={handleUpdate}
        >
          Update
        </a>
        <a
          className="label label-danger delete-cart-item"
          href="#"
          data-product=""
          onClick={handleDelete}
        >
          Delete
        </a>
      </td>
    </tr>
  );
}
