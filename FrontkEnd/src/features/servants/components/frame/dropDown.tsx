import { useState } from "react";
import {
  DropDownDiv,
  DropDownItem,
  SideListItem,
} from "../../../../styled-components/styled-components";

const DropDown = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <SideListItem>
      <a href="#" onClick={handleToggle}>
        תשלומים{" "}
      </a>
      <DropDownDiv style={{ display: collapsed ? "none" : "block" }}>
        <DropDownItem>
          <a href="#">תשלומים לגביה אישית </a>
        </DropDownItem>
        <DropDownItem>
          <a href="#">תשלומים בגביה החודש</a>
        </DropDownItem>
        <DropDownItem>
          <a href="#">תשלומים דוח</a>
        </DropDownItem>
      </DropDownDiv>
    </SideListItem>
  );
};

export default DropDown;
