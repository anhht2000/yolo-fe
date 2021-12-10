import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import Button from "./Button";
import FormatNumber from "../number/FormatNumber";

function DetailProduct({ datas }) {
  const { addItem } = useCart();
  const [status, setStatus] = useState(false);
  const [price, setPrice] = useState(1);
  const [image, setImage] = useState(datas.image01);
  const handlepriceP = () => {
    setPrice((e) => e + 1);
  };
  const handlepriceM = () => {
    setPrice((e) => e - 1);
  };
  const handleStatus = () => {
    setStatus((p) => !p);
  };
  // console.log(datas);
  return (
    <div className="detail-product">
      <div className="detail-product__wrap">
        <div className="detail-product__wrap__slide-1">
          <img
            src={datas.image01}
            alt=""
            className="detail-product__wrap__slide-1__img"
            onClick={() => {
              setImage(datas.image01);
            }}
          />
          <img
            src={datas.image02}
            alt=""
            className="detail-product__wrap__slide-1__img"
            onClick={() => {
              setImage(datas.image02);
            }}
          />
        </div>
        <div className="detail-product__wrap__slide-2">
          <img
            src={image}
            alt=""
            className="detail-product__wrap__slide-2__img"
          />
        </div>
        <div className="detail-product__wrap__slide-3">
          <h2 className="detail-product__wrap__slide-3__title">
            {datas.title}
          </h2>
          <p className="detail-product__wrap__slide-3__price">
            {FormatNumber(datas.price)}
          </p>
          <p className="detail-product__wrap__slide-3__labe">màu sắc</p>
          <div className="detail-product__wrap__slide-3-list__color">
            {datas.colors.map((item, i) => (
              <span className={`product-${item}`} key={i}></span>
            ))}
          </div>
          <p className="detail-product__wrap__slide-3__labe">kích cỡ</p>
          <div className="detail-product__wrap__slide-3-list__size">
            {datas.size.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
          <p className="detail-product__wrap__slide-3__labe">số lượng</p>
          <div className="detail-product__wrap__slide-3__quantity">
            <span onClick={handlepriceP}>-</span>
            <span>{price}</span>
            <span onClick={handlepriceM}>+</span>
          </div>
          <div className="detail-product__wrap__slide-3-list__btn">
            <div onClick={() => addItem(datas)} className="button">
              <span> thêm giỏ hàng</span>
            </div>
            <Button>mua ngay</Button>
          </div>
        </div>
      </div>
      <div className={`detail-product__description ${status ? " active" : ""}`}>
        <h1 className="detail-product__description__title">
          chi tiết sản phẩm
        </h1>
        <p
          className="detail-product__description__item"
          dangerouslySetInnerHTML={{ __html: datas.description }}
        ></p>
        <span
          className={`detail-product__description__btn-hs ${
            status ? " active" : ""
          }`}
          onClick={handleStatus}
        >
          {status ? "thu gọn" : "xem thêm "}
        </span>
      </div>
    </div>
  );
}

export default DetailProduct;
