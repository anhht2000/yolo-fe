import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import FormatNumber from "../number/FormatNumber";
import { API } from "../constants/api.constants";
import * as _ from "lodash";

function DetailProduct({ datas }) {
  const { addItem } = useCart();
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("0");
  const [optionSearch, setOptionSearch] = useState([]); //[valueId]
  const [options, setOptions] = useState({});
  const [statusDescription, setStatusDescription] = useState(false);
  const [quantity, setquantity] = useState();
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [target, setTarget] = useState();
  useEffect(() => {
    setImage(datas.images?.[0]?.path);
    setPrice(datas?.product_options?.[0]?.price);
    setquantity(1);
    const data = _.groupBy(datas?.product_options, ({ option }) => option.id);
    setOptions(data);
  }, [datas]);

  const handleSelect = (valueId) => {
    if (optionSearch.indexOf(valueId) === -1) {
      setOptionSearch([...optionSearch, valueId]);
    } else {
      const index = optionSearch.indexOf(valueId);
      setOptionSearch([...optionSearch.slice(0, index), ...optionSearch.slice(index + 1)]);
    }
  };

  const checkDataToCart = {
    id: datas.id,
    title: datas.title,
    image: datas.image01,
    color: color,
    size: size,
    quantity: quantity,
    price: datas.price,
  };
  const handlequantityP = () => {
    setquantity((e) => e + 1);
  };
  const handlequantityM = () => {
    setquantity((e) => e - 1);
  };
  const handleStatusDescription = () => {
    setStatusDescription((p) => !p);
  };

  console.log("aaa", datas?.product_options);

  return (
    <div className="detail-product">
      <div className="detail-product__wrap">
        <div className="detail-product__wrap__slide-1">
          <img
            src={`${API.BASE_URL_IMAGE}${datas.images?.[0]?.path}`}
            alt=""
            className="detail-product__wrap__slide-1__img"
            onClick={() => {
              setImage(datas.images?.[0]?.path);
            }}
          />
          <img
            src={`${API.BASE_URL_IMAGE}${datas.images?.[1]?.path}`}
            alt=""
            className="detail-product__wrap__slide-1__img"
            onClick={() => {
              setImage(datas.images?.[1]?.path);
            }}
          />
        </div>
        <div className="detail-product__wrap__slide-2">
          <img src={`${API.BASE_URL_IMAGE}${image}`} alt="" className="detail-product__wrap__slide-2__img" />
        </div>
        <div className="detail-product__wrap__slide-3">
          <h2 className="detail-product__wrap__slide-3__title">{datas?.name}</h2>
          <p className="detail-product__wrap__slide-3__price">
            {price?.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            }) || 0}
          </p>
          {Object.keys(options).length > 0 &&
            Object.values(options)?.map((option) => (
              <>
                {console.log("opt", option)}
                <p className="detail-product__wrap__slide-3__labe">{option?.[0]?.option?.name}</p>
                {option?.[0]?.option?.type === "color" ? (
                  <div className="detail-product__wrap__slide-3-list__color">
                    {option.length > 0 &&
                      option.map((e) => (
                        <>
                          <span
                            onClick={() => {
                              handleSelect(e.value?.id);
                            }}
                            style={{ backgroundColor: e.value?.name }}
                            className={optionSearch.includes(e.value?.id) ? "active" : ""}
                            // key={i}
                          />
                        </>
                      ))}
                  </div>
                ) : (
                  <div className="detail-product__wrap__slide-3-list__color">
                    {option.length > 0 &&
                      option.map((e) => (
                        <>
                          <span
                            onClick={() => {
                              handleSelect(e.value?.id);
                            }}
                            style={{ backgroundColor: e.value?.name }}
                            className={optionSearch.includes(e.value?.id) ? "active" : ""}
                          >
                            {e.value?.name}
                          </span>
                        </>
                      ))}
                  </div>
                )}
              </>
            ))}
          <p className="detail-product__wrap__slide-3__labe">số lượng</p>
          <div className="detail-product__wrap__slide-3__quantity">
            <span onClick={handlequantityM}>-</span>
            <span>{quantity}</span>
            <span onClick={handlequantityP}>+</span>
          </div>
          <div className="detail-product__wrap__slide-3-list__btn">
            <div
              onClick={() => {
                if (checkDataToCart.color !== undefined && checkDataToCart.size !== undefined) {
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
                if (checkDataToCart.color !== undefined && checkDataToCart.size !== undefined) {
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
      <div className={`detail-product__description ${statusDescription ? " active" : ""}`}>
        <h1 className="detail-product__description__title">chi tiết sản phẩm</h1>
        <p className="detail-product__description__item" dangerouslySetInnerHTML={{ __html: datas.description }}></p>
        <span
          className={`detail-product__description__btn-hs ${statusDescription ? " active" : ""}`}
          onClick={handleStatusDescription}
        >
          {statusDescription ? "thu gọn" : "xem thêm "}
        </span>
      </div>
    </div>
  );
}

export default DetailProduct;
