import React from "react";
import Product from "./product";

function Selling(props) {
  const { sellings } = props;
  return (
    <div className="selling">
      <div className="product__wrap">
        {sellings.map((selling, i) => (
          <Product key={i} datas={selling} />
        ))}
      </div>
    </div>
  );
}

export default Selling;
