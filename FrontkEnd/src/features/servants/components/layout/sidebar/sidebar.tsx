import { Link } from "react-router-dom";
import {
  SideList,
  SideListItem,
  SidebarDiv,
} from "../../../../../styled-components/styled-components";
import DropDown from "./dropDown";
import ROUTES from "../../../../../router/models/routes";

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <SidebarDiv>
      <h1>Sidebar</h1>
      <p>This is the sidebar</p>
      <div>
        <SideList>
          <SideListItem>
            <Link to={ROUTES.SERVANTS.ROOT}>ראשי</Link>
          </SideListItem>
          <SideListItem>
            <Link to={ROUTES.SERVANTS.SERVICES}>שירותים חודשיים</Link>
          </SideListItem>
          <SideListItem>
            <Link to={ROUTES.SERVANTS.CUSTOMERS}>לקוחות</Link>
          </SideListItem>
          <DropDown />
          <SideListItem>
            <Link to={ROUTES.SERVANTS.COMMISSIONS}>עמלות</Link>
          </SideListItem>
          <SideListItem>
            <Link to={ROUTES.SERVANTS.DEFINITIONS}>הגדרות</Link>
          </SideListItem>
        </SideList>
      </div>
    </SidebarDiv>
  );
};

export default Sidebar;
