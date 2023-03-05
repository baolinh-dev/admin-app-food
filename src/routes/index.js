import Dashboard from "~/pages/Dashboard";
import Accounts from "~/pages/Accounts";
import Orders from "~/pages/Orders";  
import Warehouse from "~/pages/Warehouse"; 

import DefaultLayout from "~/components/Layout/DefaultLayout";

const publicRoutes = [
  { path: "/", component: Dashboard },
  { path: "/accounts", component: Accounts},
  { path: "/warehouse", component: Warehouse},
  { path: "/orders", component: Orders},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
