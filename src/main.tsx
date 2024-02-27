import { PersistGate, Provider, BrowserRouter, ReactDOM } from "@/utils";
import { store, persistor } from "./reduxStore";
import { useRoutes } from "react-router-dom";
import MenuRoutes from "./router/routes";

import "./assets/css/index.css";
import "react-loading-skeleton/dist/skeleton.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const element = useRoutes(MenuRoutes);
  return element;
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
