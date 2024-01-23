import { useContext, useEffect } from "react";
import {
  ContentDiv,
  InfosList,
  InfosListItem,
} from "../../../styled-components/styled-components";
import { fetchData } from "../services/fetchCustomer";
import { UserContext, UserContextType } from "../hooks/servantContext";
import AccountBalance from "./accountBalance";
import CashPayButton from "./cashPayButton";
import CreditedAmount from "./creditedAmount";
import Customers from "./customers";
import Debts from "./debts";
import CustomerContextProvider from "../hooks/customerContext";
import DebtContextProvider from "../hooks/debtsContext";

const Content = (): JSX.Element => {
  const { User, setUser } = useContext<UserContextType>(UserContext);
  useEffect(() => {
    fetchData(setUser);
  }, []);
  return (
    <ContentDiv>
      <h1>Content</h1>
      <p>This is the content</p>
      <CustomerContextProvider>
        <Customers></Customers>
      </CustomerContextProvider>
      <DebtContextProvider>

      <Debts></Debts>
      </DebtContextProvider>
      <CreditedAmount></CreditedAmount>
      <AccountBalance></AccountBalance>
      <CashPayButton></CashPayButton>
    </ContentDiv>
  );
};

export default Content;
