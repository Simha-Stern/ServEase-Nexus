import { ReactNode } from "react";
import { MainDiv } from "../../../../styled-components/styled-components";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <MainDiv>{children}</MainDiv>;
};

export default Main;
