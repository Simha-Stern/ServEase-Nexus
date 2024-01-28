import { useContext, useEffect } from "react";
import PaidDebts from "./paidDebts";
import PendingDebts from "./pendingDebts";
import { DebtContextType, DebtContext } from "../../hooks/debtsContext";
import { fetchData } from "../../services/fetchDebt";
import CreditedAmount from "./creditedAmount";

function Debts() {
  const { Debt, setDebt } = useContext<DebtContextType>(DebtContext);
  useEffect(() => {
    console.log("Debts component rendered with data:", Debt);
    fetchData(setDebt);
  }, []);
  return (
    <div data-cy="debts-component">
      {Debt ? (
        <>
          <PendingDebts
            debts={Debt?.filter((debt) => debt.paymentStatus !== "fully paid")}
            data-cy="pending-debts"
          />
          <PaidDebts
            debts={Debt?.filter((debt) => debt.paymentStatus === "fully paid")}
            data-cy="paid-debts"
          ></PaidDebts>
          <CreditedAmount
            debts={Debt}
            data-cy="credited-amount"
          ></CreditedAmount>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Debts;
