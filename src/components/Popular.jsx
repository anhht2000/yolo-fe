import React from "react";
import Product from "../components/product";

function Popular({ populars }) {
  return (
    <div className="popular">
      <div className="product__wrap">
        {populars.map((selling, i) => (
          <Product key={i} datas={selling} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
