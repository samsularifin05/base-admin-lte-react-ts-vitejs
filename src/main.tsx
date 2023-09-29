import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { store, persistor } from "./reduxStore/store.ts";

import("./assets/css/index.css").then(() => {
  import("@fortawesome/fontawesome-free/css/all.min.css");
  import("react-loading-skeleton/dist/skeleton.css");
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Suspense fallback={<Skeleton width="100%" height="1000px" />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
