import {
  Store,
  Transform,
  applyMiddleware,
  createStore,
  storage,
  persistReducer,
  ThunkMiddleware,
  Persistor,
  thunk,
  persistStore,
  composeWithDevTools,
} from "@/utils";

import { rootReducer, RootAction, RootState } from "./index";

const dataTransform: Transform<RootState<string>, RootState<string>> = {
  in: (inboundState: RootState<string>) => inboundState,
  out: (outboundState: RootState<string>) => outboundState,
};

const persistConfig = {
  blacklist: [],
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
