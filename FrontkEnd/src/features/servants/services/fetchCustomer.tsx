import { Customer, customerList } from "../interfaces/customerInterface";

export const fetchData = async (setCustomer: React.Dispatch<React.SetStateAction<Customer[] | undefined>>) => {
  try {
    setCustomer(customerList);
  } catch (err) {
    console.log(err);
  }
  return true;
};
