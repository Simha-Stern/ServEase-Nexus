import React, { useContext, useEffect } from "react";
import { CustomerContext, CustomerContextType } from "../hooks/customerContext";
import { fetchData } from "../services/fetchCustomer";

function Customers() {
  const { Customer, setCustomer } = useContext<CustomerContextType>(CustomerContext);
  useEffect(() => {
    fetchData(setCustomer);
  }, []);
  return <div>
    <h1>Customers</h1>
    <ul>
      {Customer?.map((customer) => (
        <li key={customer.id}>{customer.name.first+' '+customer.name.last}</li>
      ))}
    </ul>
    </div>;
}

export default Customers;
