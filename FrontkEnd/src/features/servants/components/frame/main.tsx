import { useState } from "react";
import { MainDiv } from "../../../../styled-components/styled-components";
import Content from "./content";
import Sidebar from "./sidebar";

const Main = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <MainDiv>
      <Sidebar onOptionChange={setSelectedOption} />
      <Content selectedOption={selectedOption} />
    </MainDiv>
  );
};

export default Main;
