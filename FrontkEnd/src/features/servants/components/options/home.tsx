import React, { useContext, useEffect } from "react";
import { ContentDiv } from "../../../../styled-components/styled-components";
import CustomerContextProvider from "../../hooks/customerContext";
import DebtContextProvider from "../../hooks/debtsContext";
import UserContextProvider, {
  UserContextType,
  UserContext,
} from "../../hooks/servantContext";
import { fetchData } from "../../services/fetchCustomer";
import AccountBalance from "../content/accountBalance";
import CashPayButton from "../content/cashPayButton";
import Customers from "../content/customers";
import Debts from "../content/debts";

function Home() {
  const { setUser } = useContext<UserContextType>(UserContext);
  useEffect(() => {
    fetchData(setUser);
  }, []);
  return (
    <UserContextProvider>
      <ContentDiv>
        <h1>Content</h1>
        <p>This is the content</p>
        <CustomerContextProvider>
          <Customers></Customers>
        </CustomerContextProvider>
        <DebtContextProvider>
          <Debts></Debts>
        </DebtContextProvider>
        <AccountBalance></AccountBalance>
        <CashPayButton></CashPayButton>
      </ContentDiv>
    </UserContextProvider>
  );
}

export default Home;
