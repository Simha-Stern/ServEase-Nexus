import React, { createContext, useCallback, useState } from "react";
import { Debt } from "../interfaces/debtinterface";

export interface DebtContextType {
  Debt: Debt[] | undefined;
  setDebt: React.Dispatch<React.SetStateAction<Debt[] | undefined>>;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}

export const DebtContext = createContext<DebtContextType>({
  Debt: undefined,
  setDebt: () => {},
});

const DebtContextProvider: React.FC<ContextProviderProps> = (props) => {
  const [Debt, setDebt] = useState<Debt[]>();
  const memoizedSetDebts = useCallback(
    (newDebts: React.SetStateAction<Debt[] | undefined>) => {
      setDebt(newDebts);
    },
    []
  );
  return (
    <DebtContext.Provider value={{ Debt, setDebt: memoizedSetDebts }}>
      {props.children}
    </DebtContext.Provider>
  );
};
export default DebtContextProvider;
