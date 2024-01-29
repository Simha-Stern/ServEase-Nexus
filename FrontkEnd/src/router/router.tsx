import { Route, Routes } from "react-router-dom";
import ROUTES from "./models/routes";
import CommissionsPage from "../features/servants/pages/commissionsPage";
import CustomersPage from "../features/servants/pages/customersPage";
import DefinitionsPage from "../features/servants/pages/definitionsPage";
import HomePage from "../features/servants/pages/homePage";
import ServicesPage from "../features/servants/pages/servicesPage";
import NotFound from "../features/global/pages/404";
import LoginPage from "../features/global/login/loginPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<LoginPage />} />
      <Route path={ROUTES.SERVANTS.ROOT} element={<HomePage />} />
      <Route path={ROUTES.SERVANTS.SERVICES} element={<ServicesPage />} />
      <Route path={ROUTES.SERVANTS.CUSTOMERS} element={<CustomersPage />} />
      <Route path={ROUTES.SERVANTS.COMMISSIONS} element={<CommissionsPage />} />
      <Route path={ROUTES.SERVANTS.DEFINITIONS} element={<DefinitionsPage />} />
      <Route path={ROUTES.SERVANTS.PAYMENTS.MONTH} element={<NotFound />} />
      <Route
        path={ROUTES.SERVANTS.PAYMENTS.COLLECTION}
        element={<NotFound />}
      />
      <Route path={ROUTES.SERVANTS.PAYMENTS.REPORT} element={<NotFound />} />
    </Routes>
  );
};

export default Router;
