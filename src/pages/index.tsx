import { lazy } from "react";
const PageNotFound = lazy(() => import("./pageNotFound"));
const Dashboard = lazy(() => import("./dashboard"));
const Login = lazy(() => import("./login"));
const Home = lazy(() => import("./home"));
const Widgets = lazy(() => import("./widgets"));

export { Dashboard, Login, PageNotFound, Home, Widgets };
