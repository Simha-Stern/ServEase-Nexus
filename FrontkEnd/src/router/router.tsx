import { Route, Routes } from "react-router-dom";
import ROUTES from "./models/routes";
// import ErrorPage from "../features/global/pages/ErrorPage";
import HomePage from "../features/servants/pages/homePage";
import ServicesPage from "../features/servants/pages/servicesPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default Router;
