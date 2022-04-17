import React from "react";
import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/Logo-2.png";
import { FaBars, FaTimes, FaSearch, FaCartArrowDown, FaUser } from "react-icons/fa";

function Header(props) {
  const [menu, setMenu] = useState(false);
  const handleToggleMenu = () => {
    setMenu((p) => !p);
  };
  const headerRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        headerRef.current?.classList.add("shrink");
      } else {
        headerRef.current?.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="container__header" ref={headerRef}>
      <div className="header">
        <div className="header__iconMenu" onClick={handleToggleMenu}>
          {menu === false ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
        <div className={menu === false ? "header__navleft" : "header__navleft active"}>
          <NavLink to="/" className="header__navleft__link">
            trang chủ
          </NavLink>
          <NavLink to="/products" className="header__navleft__link">
            sản phẩm
          </NavLink>
          <NavLink to="/detail" className="header__navleft__link">
            phụ kiện
          </NavLink>
          <NavLink to="/contacs" className="header__navleft__link">
            liên hệ
          </NavLink>
        </div>
        <div className="header__logo">
          <img src={logo} alt="" className="header__logo_img" />
        </div>
        <div className=" header__navRight">
          <span>
            <FaSearch icon="faSearch" />
          </span>
          <span>
            <Link to="/cart">
              <FaCartArrowDown icon="faCartArrowDown" />
            </Link>
          </span>
          <span>
            <FaUser icon="faUser" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
