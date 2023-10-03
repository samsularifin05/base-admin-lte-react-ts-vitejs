import App from "./App.tsx";
import {
  Skeleton,
  Suspense,
  PersistGate,
  Provider,
  BrowserRouter,
  ReactDOM,
} from "@/utils";
import { store, persistor } from "./reduxStore";

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
