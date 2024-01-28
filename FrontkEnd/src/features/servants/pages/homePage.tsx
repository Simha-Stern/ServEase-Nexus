// Example of a simple React home page component

import UserContextProvider, {
  UserContext,
  UserContextType,
} from "../hooks/servantContext";
import Layout from "../components/layout/layout";
import AccountBalance from "../components/content/accountBalance";
import CashPayButton from "../components/content/cashPayButton";
import Customers from "../components/content/customers";
import Debts from "../components/content/debts";
import CustomerContextProvider from "../hooks/customerContext";
import DebtContextProvider from "../hooks/debtsContext";
import { useContext, useEffect } from "react";
import { fetchData } from "../services/fetchCustomer";

const HomePage = () => {
  const { setUser } = useContext<UserContextType>(UserContext);
  useEffect(() => {
    fetchData(setUser);
  }, []);

  return (
    <Layout>
      <UserContextProvider>
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
      </UserContextProvider>
    </Layout>
  );
};

export default HomePage;
