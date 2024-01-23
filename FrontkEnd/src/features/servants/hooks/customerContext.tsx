import React, { createContext, useState } from "react";
import { Customer } from "../interfaces/customerInterface";

export interface CustomerContextType {
  Customer: Customer[] | undefined;
  setCustomer: React.Dispatch<React.SetStateAction<Customer[] | undefined>>;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}

export const CustomerContext = createContext<CustomerContextType>({
  Customer: undefined,
  setCustomer: () => {},
});

const CustomerContextProvider: React.FC<ContextProviderProps> = (props) => {
  const [Customer, setCustomer] = useState<Customer[]>();
  const contextValue: CustomerContextType = {
    Customer,
    setCustomer,
  };
  return (
    <CustomerContext.Provider value={contextValue}>
      {props.children}
    </CustomerContext.Provider>
  );
};
export default CustomerContextProvider;
