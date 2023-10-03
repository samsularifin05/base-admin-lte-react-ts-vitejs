import { Dashboard, DataUser, Home } from "@/pages";
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
    path: "/data-user",
    exact: true,
    title: "Data User",
    component: () => (
      <ProtectedRoute>
        <DataUser />
      </ProtectedRoute>
    ),
  },
];

export default MenuRoutes;
