import { lazy } from "react";
/*----------------------------- lazy Loading -------------------------- */
const Login = lazy<any>(() => import("../pages/login/Login"));
const Home = lazy<any>(() => import("../pages/home/Home"));
const NotFoundPage = lazy(() => import("../pages/notFoundPage/NotFoundPage"));

const routePath = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    exact: true,
    component: NotFoundPage,
  },
];

export default routePath;
