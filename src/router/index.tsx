import { Dashboard, Home, Widgets } from "@/pages";
import Login from "@/pages/login";
import { ProtectedRoute } from "./ProtectedRoute";

const MenuRoutes = [
  {
    path: "/",
    exact: true,
    title: "Undangan Digital",
    component: () => <Home />,
  },
  {
    path: "/login-admin",
    exact: true,
    title: "Login",
    component: () => <Login />,
  },
  {
    path: "/dashboard",
    exact: true,
    title: "Dashboard",
    component: () => (
      <ProtectedRoute>
        <Dashboard />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "/widgets",
    exact: true,
    title: "Widgets",
    component: () => (
      <ProtectedRoute>
        <Widgets />{" "}
      </ProtectedRoute>
    ),
  },
];

export default MenuRoutes;
