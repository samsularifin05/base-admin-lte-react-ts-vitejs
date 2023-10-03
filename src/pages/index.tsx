import { lazy } from "react";
const PageNotFound = lazy(() => import("./pageNotFound"));
const Dashboard = lazy(() => import("./dashboard"));
const Login = lazy(() => import("./login"));
const Home = lazy(() => import("./home"));
const DataUser = lazy(() => import("./datamaster"));

export { Dashboard, Login, PageNotFound, Home, DataUser };
