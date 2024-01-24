import React from "react";
import { Debt } from "../../interfaces/debtinterface";

interface DebtsProps {
  debts: Debt[] | undefined;
}

const CreditedAmount: React.FC<DebtsProps> = ({ debts }) => {
  const sum = () => {
    let sum = 0;
    debts?.forEach((debt) => {
      sum += debt.paidAmount;
    });
    return sum;
  };
  return (
    <div>
      <p>סך הסכום שנכנס החודש </p>
      {sum()}
    </div>
  );
};

export default CreditedAmount;
