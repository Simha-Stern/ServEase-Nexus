import {
  ContentDiv,
  HomePageDiv,
} from "../../../../styled-components/styled-components";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import Sidebar from "./sidebar/sidebar";
import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

const Layout: React.FC<ContentProps> = ({ children }) => {
  return (
    <HomePageDiv>
      <Header />
      <Main>
        <Sidebar />
        <ContentDiv>{children}</ContentDiv>
      </Main>
      <Footer />
    </HomePageDiv>
  );
};

export default Layout;
