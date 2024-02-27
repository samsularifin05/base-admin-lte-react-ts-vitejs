import { getItem } from "../utils/helper";
import App from "../App";
import { Dashboard, Home, Login, PageNotFound, Widgets } from "../pages";
import { Navigate } from "react-router-dom";
import { UserLogin } from "@/interface";
const userData: UserLogin[] = getItem<UserLogin[]>("userdata");

const isLoggedIn = userData.length === 0 ? false : true;

const AppRoute = [
  {
    path: "/admin/",
    element: isLoggedIn ? <App /> : <Navigate to="/login-admin" />,
    children: [
      {
        path: "*",
        title: "Halaman Tidak Ditemukan",
        element: <PageNotFound />,
      },
      {
        path: "/admin/dashboard",
        title: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/widgets",
        title: "Widgets",
        element: <Widgets />,
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
