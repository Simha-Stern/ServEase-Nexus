
import { SideList, SideListItem, SidebarDiv } from "../../../styled-components/styled-components";
import DropDown from "./dropDown";

const Sidebar = (): JSX.Element => {

  return (
    <SidebarDiv>
      <h1>Sidebar</h1>
      <p>This is the sidebar</p>
      <div>
        <SideList>
          <SideListItem>
            <a href="#">שירותים חודשיים</a>
          </SideListItem>
          <SideListItem>
            <a href="#">לקוחות</a>
          </SideListItem>
          <DropDown />
          <SideListItem>
            <a href="#">עמלות</a>
          </SideListItem>
          <SideListItem>
            <a href="#">הגדרות</a>
          </SideListItem>
        </SideList>
      </div>
    </SidebarDiv>
  );
};

export default Sidebar;
