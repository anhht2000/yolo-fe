import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import FormatNumber from "../number/FormatNumber";

function ProductCart(props) {
  return (
    <div className="product__item">
      <Link to={`/catalog/${props.datas.slug}`}>
        <div className="product__item__image">
          <img
            src={props.datas.image01}
            alt={props.datas.title}
            className="product__item__image-img img1"
          />
          <img
            src={props.datas.image02}
            alt={props.datas.title}
            className="product__item__image-img img2"
          />
        </div>
      </Link>
      <div className="product__item__info">
        <p className="product__item__info-title">{props.datas.title}</p>
        <p className="product__item__info-price">
          <span>{FormatNumber(props.datas.price)}</span>
          <span>
            <del>399,000</del>
          </span>
        </p>
        <div className="button">
          <span>
            <Link to={`/catalog/${props.datas.slug}`}>mua ngay</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
