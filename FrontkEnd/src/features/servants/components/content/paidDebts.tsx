import React, { memo } from "react";
import { Debt } from "../../interfaces/debtinterface";

interface DebtsProps {
  debts: Debt[] | undefined;
}

const PaidDebts: React.FC<DebtsProps> = ({ debts }) => {
  return (
    <div>
      חובות ששולמו
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

export default memo(PaidDebts);
