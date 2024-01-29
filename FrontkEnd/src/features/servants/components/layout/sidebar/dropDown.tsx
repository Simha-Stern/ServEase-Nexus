import { useState } from "react";
import {
  DropDownDiv,
  DropDownItem,
  SideListItem,
} from "../../../../../styled-components/styled-components";
import { Link } from "react-router-dom";
import ROUTES from "../../../../../router/models/routes";

const DropDown = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <SideListItem>
      <Link to="#" onClick={handleToggle}>
        תשלומים
      </Link>
      <DropDownDiv style={{ display: collapsed ? "none" : "block" }}>
        <DropDownItem>
          <Link to={ROUTES.SERVANTS.PAYMENTS.MONTH}>תשלומים בגביה החודש</Link>
        </DropDownItem>
        <DropDownItem>
          <Link to={ROUTES.SERVANTS.PAYMENTS.COLLECTION}>
            תשלומים לגביה אישית{" "}
          </Link>
        </DropDownItem>
        <DropDownItem>
          <Link to={ROUTES.SERVANTS.PAYMENTS.REPORT}>תשלומים דוח</Link>
        </DropDownItem>
      </DropDownDiv>
    </SideListItem>
  );
};

export default DropDown;
