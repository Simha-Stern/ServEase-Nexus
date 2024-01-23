import React, { useContext, useEffect } from 'react'
import PaidDebts from './paidDebts'
import PendingDebts from './pendingDebts'
import { DebtContextType, DebtContext } from '../hooks/debtsContext';
import { fetchData } from '../services/fetchDebt';

function Debts() {
  const { Debt, setDebt } = useContext<DebtContextType>(DebtContext);
  useEffect(() => {
    fetchData(setDebt);
  }, []);
  return (
    <div>
<PendingDebts debts={Debt?.filter(debt => debt.paymentStatus !== 'fully paid')} />
        <PaidDebts debts={Debt?.filter(debt => debt.paymentStatus === 'fully paid')}></PaidDebts>
    </div>
  )
}

export default Debts