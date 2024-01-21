// MainContent.js
import React, { useContext, useEffect } from "react";
import CustomerProfileCard from "./CustomerProfileCard";
import {
  MainContentContainer,
  RightContent,
} from "../../../styled-components/styled-components";
import { users } from "../interfaces/debtInterface";
import { UserContext, UserContextType } from "../hooks/userContext";

const MainContent: React.FC = () => {
  const { User, setUser } = useContext<UserContextType>(UserContext);

  useEffect(() => {
    // Set the User state when the component mounts
    setUser(users[0]!);
  }, []);

  return (
    <MainContentContainer>
      <RightContent>
      {User && <CustomerProfileCard user={User} />}
      </RightContent>
    </MainContentContainer>
  );
};

export default MainContent;
