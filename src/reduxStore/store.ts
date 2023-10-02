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
import RootAction, { RootState } from "./rootState/rootActions";
import { rootReducer } from "./recuers";

const dataTransform: Transform<RootState<string>, RootState<string>> = {
  in: (inboundState: RootState<string>) => inboundState,
  out: (outboundState: RootState<string>) => outboundState,
};

const persistConfig = {
  blacklist: ["form", "utility", "theme"],
  key: "root",
  storage,
  transforms: [dataTransform],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(
  thunk as ThunkMiddleware<RootState<string>, RootAction>
);
const store: Store<RootState<string>, RootAction> = createStore(
  persistedReducer,
  composeWithDevTools(middleware)
);
const persistor: Persistor = persistStore(store);

export { store, persistor };
