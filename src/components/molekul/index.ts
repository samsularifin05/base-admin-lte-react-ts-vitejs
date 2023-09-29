import { lazy } from "react";

const Content = lazy(() => import("./content"));
const Footer = lazy(() => import("./footer"));
const Header = lazy(() => import("./header"));
const Sidebar = lazy(() => import("./sidebar"));

export { Sidebar, Header, Content, Footer };
