const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  ADMINS: "/admins",
  SERVANTS: {
    ROOT: "/servants",
    SERVICES: "/servants/services",
    CUSTOMERS: "/servants/customers",
    PAYMENTS: {
      MONTH: "servants/monthpayments",
      COLLECTION: "servants/collection",
      REPORT: "servants/report",
    },
    COMMISSIONS: "/servants/commissions",
    DEFINITIONS: "/servants/definitions",
  },
  CUSTOMERS: "/customers",
};

export default ROUTES;
