import React, { memo } from "react";
import { Debt } from "../../interfaces/debtinterface";

interface DebtsProps {
  debts: Debt[] | undefined;
}

const PendingDebts: React.FC<DebtsProps> = ({ debts }) => {
  return (
    <div>
      חובות בהמתנה
      {debts?.map((debt: Debt) => (
        <div key={debt.id}>
          <h3>
            {debt.serviceId}
            <span>{debt.paymentStatus}</span>
          </h3>
        </div>
      ))}
    </div>
  );
};
export default memo(PendingDebts);
