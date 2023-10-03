import { lazy } from "react";
const TableMaster = lazy(() => import("./tableMaster"));
const Button = lazy(() => import("./Button"));
const Card = lazy(() => import("./Card"));
const Row = lazy(() => import("./Row"));
const Col = lazy(() => import("./Col"));
const HeaderContent = lazy(() => import("./HeaderContent"));
const PanelContent = lazy(() => import("./PanelContent"));

export { Button, Col, Row, Card, PanelContent, HeaderContent, TableMaster };
