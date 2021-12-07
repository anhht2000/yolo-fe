import React from "react";
import Product from "./product";

function New({ news }) {
  return (
    <div className="new">
      <div className="product__wrap">
        {news.map((selling, i) => (
          <Product key={i} datas={selling} />
        ))}
      </div>
    </div>
  );
}

export default New;
