/* eslint-disable react/jsx-pascal-case */
import React, { useState, useCallback, useEffect, useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Helmet from "../../components/Helmet";
import CheckBox from "../../components/CheckBox";

import List_Products from "../../components/List_Products";
// data
import colors from "../../assets/fake-data/product-color";
import sizes from "../../assets/fake-data/product-size";
import categorys from "../../assets/fake-data/category";
import productData from "../../assets/fake-data/product";
import useProduct from "../../hooks/product.hook";
import { Pagination, Stack } from "@mui/material";
import { Box } from "@mui/system";

function Products() {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };
  const [optionSearch, setOptionSearch] = useState([]); //[valueId]
  const [options, setOptions] = useState([]); //[valueId]
  const productList = productData.getAllProducts();
  const [products, setProducts] = useState(productList);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [filter, setFilter] = useState(initFilter);
  const { getProduct, getOptions } = useProduct();

  useEffect(() => {
    getProduct({
      page,
      per_page: 9,
      successCallback: (response) => {
        if (response.result?.success) {
          setProducts(response.result.payload?.data);
          setTotalPage(response.result.payload?.total);
        }
      },
    });
  }, [page]);

  useEffect(() => {
    getOptions({
      successCallback: (response) => {
        if (response.result?.success) {
          setOptions(response.result.payload?.data);
        }
      },
    });
  }, []);

  console.log("aaa", optionSearch);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleCheckbox = (valueId) => {
    if (optionSearch.indexOf(valueId) === -1) {
      setOptionSearch([...optionSearch, valueId]);
    } else {
      const index = optionSearch.indexOf(valueId);
      setOptionSearch([...optionSearch.slice(0, index), ...optionSearch.slice(index + 1)]);
    }
  };

  useEffect(() => {
    getProduct({
      page,
      per_page: 9,
      options: optionSearch,
      successCallback: (response) => {
        if (response.result?.success) {
          setProducts(response.result.payload?.data);
          setTotalPage(response.result.payload?.total);
        }
      },
    });
  }, [optionSearch]);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter((e) => e !== item.categorySlug);
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };

  const clearFilter = () => setFilter(initFilter);

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }

    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);
  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle("active");

  return (
    <Helmet title="catelog">
      <div className="products">
        {/* <Filter change={filterSelect} colors={colors} sizes={sizes} categorys={categorys} /> */}
        <div className="catalog__filter" ref={filterRef}>
          <div className="catalog__filter__close" onClick={() => showHideFilter()}>
            <BsArrowLeft />
          </div>

          {options.length > 0 &&
            options.map((option) => (
              <div className="catalog__filter__widget">
                <div className="catalog__filter__widget__title">{option?.name}</div>
                <div className="catalog__filter__widget__content">
                  {option?.values.map((item, index) => (
                    <div key={index} className="catalog__filter__widget__content__item">
                      <CheckBox
                        label={item.name}
                        onChange={() => handleCheckbox(item?.id)}
                        checked={!!optionSearch.includes(item?.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

          {/* <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">màu sắc</div>
            <div className="catalog__filter__widget__content">
              {colors.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <CheckBox
                    label={item.display}
                    onChange={(input) => filterSelect("COLOR", input.checked, item)}
                    checked={filter.color.includes(item.color)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">kích cỡ</div>
            <div className="catalog__filter__widget__content">
              {sizes.map((item, index) => (
                <div key={index} className="catalog__filter__widget__content__item">
                  <CheckBox
                    label={item.display}
                    onChange={(input) => filterSelect("SIZE", input.checked, item)}
                    checked={filter.size.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div> */}

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <div className="button" onClick={clearFilter}>
                <span>xóa bộ lọc</span>
              </div>
            </div>
          </div>
        </div>
        <div className="catalog__filter__toggle">
          <div className="button" onClick={() => showHideFilter()}>
            <span>bộ lọc</span>
          </div>
        </div>
        <List_Products products={products} />
      </div>
      <Stack direction="row">
        <div className="page_ex"></div>
        <Pagination count={totalPage} color="primary" className="pagina" onChange={handleChange} />
      </Stack>
    </Helmet>
  );
}

export default Products;
