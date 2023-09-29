import { applyMiddleware, createStore, Store } from "redux";
import {
  persistReducer,
  persistStore,
  Persistor,
  Transform
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import RootAction, { RootState } from "./actions";
import { rootReducer } from "./recuers";

const dataTransform: Transform<RootState<string>, RootState<string>> = {
  in: (inboundState: RootState<string>) => inboundState, // Fungsi untuk memodifikasi data saat menyimpan ke Redux Persist (tidak ada perubahan yang diperlukan)
  out: (outboundState: RootState<string>) => outboundState // Fungsi untuk memodifikasi data saat mengambil dari Redux Persist (tidak ada perubahan yang diperlukan)
};

const persistConfig = {
  blacklist: ["form", "utility", "theme"],
  key: "root",
  storage,
  transforms: [dataTransform] // Gunakan transform yang telah dibuat
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
