import {
  SideList,
  SideListItem,
  SidebarDiv,
} from "../../../../styled-components/styled-components";
import DropDown from "./dropDown";
type OptionChangeHandler = (option: string) => void;

interface Props {
  onOptionChange: OptionChangeHandler;
}
const Sidebar: React.FC<Props> = ({ onOptionChange }): JSX.Element => {
  const handleOptionChange = (option: string) => {
    onOptionChange(option);
  };

  return (
    <SidebarDiv>
      <h1>Sidebar</h1>
      <p>This is the sidebar</p>
      <div>
        <SideList>
          <SideListItem onClick={() => handleOptionChange("services")}>
            <a href="/services">שירותים חודשיים</a>
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
