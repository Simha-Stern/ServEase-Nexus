// Example of a simple React home page component

import Header from "../components/frame/header";
import Footer from "../components/frame/footer";
import Main from "../components/frame/main";
import { HomePageDiv } from "../../../styled-components/styled-components";
import UserContextProvider from "../hooks/servantContext";

const HomePage = () => {
  return (
    <UserContextProvider>
      <HomePageDiv>
        <Header />
        <Main />
        <Footer />
      </HomePageDiv>
    </UserContextProvider>
  );
};

export default HomePage;
