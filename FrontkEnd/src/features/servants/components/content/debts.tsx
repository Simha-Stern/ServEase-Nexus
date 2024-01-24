import React, { useContext, useEffect } from "react";
import PaidDebts from "./paidDebts";
import PendingDebts from "./pendingDebts";
import { DebtContextType, DebtContext } from "../../hooks/debtsContext";
import { fetchData } from "../../services/fetchDebt";
import CreditedAmount from "./creditedAmount";

function Debts() {
  const { Debt, setDebt } = useContext<DebtContextType>(DebtContext);
  useEffect(() => {
    fetchData(setDebt);
  }, []);
  return (
    <div>
      <PendingDebts
        debts={Debt?.filter((debt) => debt.paymentStatus !== "fully paid")}
      />
      <PaidDebts
        debts={Debt?.filter((debt) => debt.paymentStatus === "fully paid")}
      ></PaidDebts>
      <CreditedAmount debts={Debt}></CreditedAmount>
    </div>
  );
}

export default Debts;
