import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions";

export default function Product(props) {
  const [quantity, setQuantity] = useState(1);
  let { product } = props;
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product, quantity));
    setQuantity(1);
  };
  let elementBtn =
    product.quantity > 0 ? (
      <>
        <input
          name="quantity-product-1"
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(+e.target.value)}
        />
        <a data-product={1} href="#" className="price" onClick={handleAdd}>
          {" "}
          {product.price} USD{" "}
        </a>
      </>
    ) : (
      <span className="price"> {product.price} USD</span>
    );
  return (
    <div className="media product">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={product.image} alt="pizza" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{product.productName}</h4>
        <p>{product.title}</p>
        {elementBtn}
      </div>
    </div>
  );
}
