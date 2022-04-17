import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import Helmet from "../../components/Helmet";
import { Section } from "../../components/Section";
import { RiDeleteBin2Line } from "react-icons/ri";
import FormatNumber from "../../number/FormatNumber";

function Cart() {
  const { cartTotal, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();
  console.log(items);
  return (
    <Helmet title="cart">
      <Section>
        <div className="cart">
          <div className="cart__checkout">
            <div className="cart__checkout__title">bạn đang có {totalUniqueItems} sản phẩm trong giỏ hàng</div>
            <div className="cart__checkout__total">
              <span>thành tiền:</span>
              <span>{FormatNumber(cartTotal)}</span>
            </div>
            <div className="button">
              <span>đặt hàng</span>
            </div>
            <div className="button">
              <span>
                <Link to="/products">tiếp tục mua hàng </Link>
              </span>
            </div>
          </div>
          <div className="cart__info">
            {items.map((item, index) => (
              <div className="cart__info-item" key={index}>
                <div className="cart__info-item__img">
                  <img src={item.image} alt="" />
                </div>
                <h3 className="cart__info-item__title">
                  {item.title}-<span>{item.color}</span>-{item.size}
                </h3>
                <h3 className="cart__info-item__price">{FormatNumber(item.price)}</h3>
                <li className="cart__info-item__quantity">
                  <span onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</span>
                  <span> {item.quantity}</span>
                  <span onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</span>
                  <RiDeleteBin2Line className="cart__info-item__quantity-delete" onClick={() => removeItem(item.id)} />
                </li>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Helmet>
  );
}

export default Cart;
