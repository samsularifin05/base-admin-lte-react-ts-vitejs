import { Dashboard, Login, PageNotFound } from "../pages";

const MenuRoutes = [
  {
    path: "/",
    exact: true,
    title: "Login",
    component: () => <Login />,
  },
  {
    path: "/dashboard",
    exact: true,
    title: "Dashboard",
    component: () => <Dashboard />,
  },

  {
    path: "/404",
    exact: false,
    component: () => <PageNotFound />,
  },
];

export default MenuRoutes;
