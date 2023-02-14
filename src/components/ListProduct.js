import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

export default function ListProduct() {
  let listProducts = useSelector((state) => state.listProduct);
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          {/* PRODUCT : START */}
          {listProducts.map((product) => (
            <Product key={product.productId} product={product} />
          ))}
          {/* PRODUCT : END */}
        </div>
      </div>
    </div>
  );
}
