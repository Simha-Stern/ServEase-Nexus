import { MainDiv } from "../../../styled-components/styled-components";
import UserContextProvider from "../hooks/servantContext";
import Content from "./content";
import Sidebar from "./sidebar";

const Main = ():JSX.Element => {
  return (
    <MainDiv>
      <Sidebar />
      <UserContextProvider>
        <Content />
      </UserContextProvider>
    </MainDiv>
  );
};

export default Main;
