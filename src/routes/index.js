import Home from "../pages/Home";
import News from "../pages/News";
import Contact from "../pages/Contact";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/news", component: News },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
