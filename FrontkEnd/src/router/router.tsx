import { Route, Routes } from "react-router-dom";
import ROUTES from "./models/routes";
import CommissionsPage from "../features/servants/pages/commissionsPage";
import CustomersPage from "../features/servants/pages/customersPage";
import DefinitionsPage from "../features/servants/pages/definitionsPage";
import HomePage from "../features/servants/pages/homePage";
import ServicesPage from "../features/servants/pages/servicesPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.SERVANTS.ROOT} element={<HomePage />} />
      <Route path={ROUTES.SERVANTS.SERVICES} element={<ServicesPage />} />
      <Route path={ROUTES.SERVANTS.CUSTOMERS} element={<CustomersPage />} />
      <Route path={ROUTES.SERVANTS.COMMISSIONS} element={<CommissionsPage />} />
      <Route path={ROUTES.SERVANTS.DEFINITIONS} element={<DefinitionsPage />} />
    </Routes>
  );
};

export default Router;
