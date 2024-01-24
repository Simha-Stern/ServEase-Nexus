import React from "react";
import { HomePageDiv } from "../../../styled-components/styled-components";
import Footer from "../components/frame/footer";
import Header from "../components/frame/header";
import Main from "../components/frame/main";

const ServicesPage = () => {
  return (
    <HomePageDiv>
      <Header />
      <Main />
      <Footer />
    </HomePageDiv>
  );
};

export default ServicesPage;
