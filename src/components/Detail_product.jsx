import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import FormatNumber from "../number/FormatNumber";

function DetailProduct({ datas }) {
  const { addItem } = useCart();
  const [image, setImage] = useState("");
  const [statusDescription, setStatusDescription] = useState(false);
  const [quantity, setquantity] = useState();
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [target, setTarget] = useState ();
  console.log(quantity);
  useEffect(() => {
    setImage(datas.image01);
    setquantity(1);
  }, [datas]);
  const checkDataToCart = {
    id: datas.id,
    title: datas.title,
    image: datas.image01,
    color: color,
    size: size,
    quantity: quantity,
    price: datas.price,
  };
  console.log(checkDataToCart);
  const handlequantityP = () => {
    setquantity((e) => e + 1);
  };
  const handlequantityM = () => {
    setquantity((e) => e - 1);
  };
  const handleStatusDescription = () => {
    setStatusDescription((p) => !p);
  };

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
              <span
                onClick={() => {
                  setColor(item);
                }}
                className={`product-${item} ${color === item ? "active" : ""}`}
                key={i}
              ></span>
            ))}
          </div>
          <p className="detail-product__wrap__slide-3__labe">kích cỡ</p>
          <div className="detail-product__wrap__slide-3-list__size">
            {datas.size.map((item, i) => (
              <span
                onClick={() => {
                  setSize(item);
                }}
                className={`${size === item ? "active" : ""}`}
                key={i}
              >
                {item}
              </span>
            ))}
          </div>
          <p className="detail-product__wrap__slide-3__labe">số lượng</p>
          <div className="detail-product__wrap__slide-3__quantity">
            <span onClick={handlequantityM}>-</span>
            <span>{quantity}</span>
            <span onClick={handlequantityP}>+</span>
          </div>
          <div className="detail-product__wrap__slide-3-list__btn">
            <div
              onClick={() => {
                if (
                  checkDataToCart.color != undefined &&
                  checkDataToCart.size != undefined
                ) {
                  addItem(checkDataToCart);
                  alert(" đã thêm vào giỏ hàng ");
                } else {
                  alert("bạn vui lòng chọn kích cỡ và màu ");
                }
              }}
              className="button"
            >
              <span> thêm giỏ hàng</span>
            </div>
            <div
              onClick={() => {
                if (
                  checkDataToCart.color != undefined &&
                  checkDataToCart.size != undefined
                ) {
                  addItem(checkDataToCart);
                  alert(" đã thêm vào giỏ hàng ");
                } else {
                  alert("bạn vui lòng chọn kích cỡ và màu ");
                }
              }}
              className="button"
            >
              <span>{<Link to="/cart">mua ngay</Link>}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`detail-product__description ${
          statusDescription ? " active" : ""
        }`}
      >
        <h1 className="detail-product__description__title">
          chi tiết sản phẩm
        </h1>
        <p
          className="detail-product__description__item"
          dangerouslySetInnerHTML={{ __html: datas.description }}
        ></p>
        <span
          className={`detail-product__description__btn-hs ${
            statusDescription ? " active" : ""
          }`}
          onClick={handleStatusDescription}
        >
          {statusDescription ? "thu gọn" : "xem thêm "}
        </span>
      </div>
    </div>
  );
}

export default DetailProduct;
