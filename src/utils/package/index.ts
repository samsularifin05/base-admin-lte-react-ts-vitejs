import Skeleton from "react-loading-skeleton";

import { memo, Suspense, useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";

import { applyMiddleware, createStore, Store } from "redux";
import {
  persistReducer,
  persistStore,
  Persistor,
  Transform,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Link, Route } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Col, Input, Row, TablePaginationConfig } from "antd";
import { Button, Table, Popover, Spin } from "antd";
import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";

export {
  ReactDOM,
  Button,
  Axios,
  Table,
  Popover,
  Spin,
  Col,
  Input,
  Row,
  BrowserRouter,
  Provider,
  PersistGate,
  Skeleton,
  Navbar,
  Nav,
  memo,
  useState,
  Link,
  NavDropdown,
  Dropdown,
  Route,
  useDispatch,
  Suspense,
  useEffect,
  applyMiddleware,
  createStore,
  persistReducer,
  persistStore,
  storage,
  composeWithDevTools,
  thunk,
};
export type { AxiosRequestConfig };
export type { AxiosResponse };
export type { TablePaginationConfig };
export type { Store, Persistor, Transform, ThunkMiddleware };
