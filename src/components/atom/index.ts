import { lazy } from "react";
const TableMaster = lazy(() => import("./tableMaster"));
const Button = lazy(() => import("./Button"));
const Card = lazy(() => import("./Card"));
const Row = lazy(() => import("./Row"));
const Col = lazy(() => import("./Col"));
const HeaderContent = lazy(() => import("./HeaderContent"));
import PanelContent from "./PanelContent";

export { Button, Col, Row, Card, PanelContent, HeaderContent, TableMaster };
