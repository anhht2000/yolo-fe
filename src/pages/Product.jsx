import React from "react";
import { useParams } from "react-router-dom";

import Helmet from "../components/Helmet";
import ProductCart from "../components/product_cart";
import DetailProduct from "../components/Detail_product";

import { SectionTitle, Section } from "../components/Section";

import productData from "../assets/fake-data/product";
function Product() {
  let params = useParams();
  const product = productData.getProductBySlug(params.slug);
  const suggestProduct = productData.getProducts(8);
  console.log(product);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title={product.title}>
      <Section>
        <DetailProduct datas={product} />
      </Section>
      <SectionTitle>
        <h1 > khám phá thêm </h1>
      </SectionTitle>
      <Section>
        <div className="product__wrap">
          {suggestProduct.map((item, i) => (
            <ProductCart key={i} datas={item} />
          ))}
        </div>
      </Section>
    </Helmet>
  );
}

export default Product;
