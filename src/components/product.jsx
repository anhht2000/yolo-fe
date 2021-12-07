import React from "react";
import Button from "./Button";

function product({ datas }) {
  console.log(datas);
  return (
    <div className="product__item">
      <div className="product__item__image">
        <img
          src={datas.image01}
          alt={datas.title}
          className="product__item__image-img img1"
        />
        <img
          src={datas.image02}
          alt={datas.title}
          className="product__item__image-img img2"
        />
      </div>
      <div className="product__item__info">
        <p className="product__item__info-title">{datas.title}</p>
        <p className="product__item__info-price">
          <span>{datas.price}</span>
          <span>399,000</span>
        </p>
        <Button content="mua ngay" />
      </div>
    </div>
  );
}

export default product;
