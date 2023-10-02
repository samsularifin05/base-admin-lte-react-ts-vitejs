import Skeleton from "react-loading-skeleton";

import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";

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

export {
  Skeleton,
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
export type { Store, Persistor, Transform, ThunkMiddleware };
