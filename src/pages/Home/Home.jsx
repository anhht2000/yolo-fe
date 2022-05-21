import React, { useEffect } from "react";
import banner from "../../assets/images/banner.png";

import Helmet from "../../components/Helmet";
import { Section, SectionTitle } from "../../components/Section";
import Slide from "../../components/Slide";
import Policy from "../../components/Policy";
import Selling from "../../components/Selling";
import New from "../../components/New";
import Popular from "../../components/Popular";

import heroSliderData from "../../assets/fake-data/slide";
import policy from "../../assets/fake-data/policy";
import data from "../../assets/fake-data/product";
import { useAppSelector } from "../../hooks/redux.hook";
import { getIsLogin } from "../../redux/reducers/auth.reducer";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const isLogin = useAppSelector(getIsLogin)
  const navigate = useNavigate()
  
  useEffect(() => {
    if(!isLogin){
      navigate('/login')
    }
  }, []);
  // console.log(heroSliderData);
  const sellingDatas = data.getProducts(4);
  const newDatas = data.getProducts(8);
  const popularDatas = data.getProducts(12);
  return (
    <Helmet title="Home">
      <Section>
        <Slide slides={heroSliderData} />
      </Section>
      <Section>
        <Policy policys={policy} />
      </Section>
      <SectionTitle>
        <h1>sản phẩm bán chạy trong tuần</h1>
      </SectionTitle>
      <Section>
        <Selling sellings={sellingDatas} />
      </Section>
      <SectionTitle>
        <h1>sản phẩm mới</h1>
      </SectionTitle>
      <Section>
        <New news={newDatas} />
      </Section>
      <Section>
        <img className="home__banner" src={banner} alt="banner" />
      </Section>
      <SectionTitle>
        <h1>phổ biến</h1>
      </SectionTitle>
      <Section>
        <Popular populars={popularDatas} />
      </Section>
    </Helmet>
  );
}

export default Home;
