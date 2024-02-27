import App from "../App";
import { Dashboard, Home, Login, PageNotFound, Widgets } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRoute = [
  {
    path: "/admin/",
    element: <App />,
    children: [
      {
        path: "*",
        title: "Halaman Tidak Ditemukan",
        element: (
          <ProtectedRoute>
            <PageNotFound />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/dashboard",
        title: "Dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/widgets",
        title: "Widgets",
        element: (
          <ProtectedRoute>
            <Widgets />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login-admin",
        title: "Login",
        element: <Login />,
      },
      {
        path: "*",
        title: "Halaman Tidak Ditemukan",
        element: <PageNotFound />,
      },
      {
        path: "",
        title: "Halaman Public",
        element: <Home />,
      },
    ],
  },
];

export default AppRoute;
