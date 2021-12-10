import React from "react";
import ProductCart from "./product_cart";

function Selling(props) {
  const { sellings} = props;
  return (
    <div className="selling">
      <div className="product__wrap">
        {sellings.map((selling, i) => (
          <ProductCart key={i} datas={selling}/>
        ))}
      </div>
    </div>
  );
}

export default Selling;
