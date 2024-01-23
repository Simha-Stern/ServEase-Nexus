import { Debt, debtList } from "../interfaces/debtinterface";

export const fetchData = async (setDebt: React.Dispatch<React.SetStateAction<Debt[] | undefined>>) => {
  try {
    setDebt(debtList);
  } catch (err) {
    console.log(err);
  }
  return true;
};
