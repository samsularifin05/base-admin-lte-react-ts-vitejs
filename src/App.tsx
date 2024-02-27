import { Content, Footer, Header, Sidebar } from "./components";
import {
  addWindowClass,
  calculateWindowSize, // Assuming this is expensive
  removeWindowClass,
  useWindowSize,
  useDispatch,
  useEffect,
  LoadingContent,
  userData,
} from "./utils";
import {
  AppDispatch,
  themesActions,
  useAppSelector,
  utilityActions,
} from "./reduxStore";
import React, { useMemo } from "react";

const App = () => {
  const theme = useAppSelector((state) => state.theme);
  const utility = useAppSelector((state) => state.utility);

  const dispatch = useDispatch<AppDispatch>();
  const windowSize = useWindowSize();

  // Memoize the calculated window size to avoid unnecessary recalculations
  const memoizedWindowSize = useMemo(
    () => calculateWindowSize(windowSize.width),
    [windowSize.width]
  );

  const handleToggleMenuSidebar = () => {
    dispatch(themesActions.setSidebarToggle(!theme.getSidebarToggle));
  };

  useEffect(() => {
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");

    // Use the memoized window size
    const size = memoizedWindowSize;

    if (utility.getScreenSize !== size) {
      dispatch(utilityActions.setScreenSize(size));
    }

    if (theme.getSidebarToggle && utility.getScreenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if (theme.getSidebarToggle && utility.getScreenSize === "xs") {
      addWindowClass("sidebar-open");
    } else if (!theme.getSidebarToggle && utility.getScreenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }
  }, [
    dispatch,
    memoizedWindowSize,
    theme.getSidebarToggle,
    utility.getScreenSize,
  ]);

  return (
    <React.Fragment>
      {userData.username ? (
        <div className="wrapper">
          {theme.handleSetPageHeader && <Header />}
          {theme.handleSetPageSidebar && <Sidebar />}
          {theme.handleSetContent && <Content />}
          {theme.handleSetFooter && <Footer />}
        </div>
      ) : (
        theme.handleSetContent && <Content />
      )}

      <div
        id="sidebar-overlay"
        role="presentation"
        onClick={() => handleToggleMenuSidebar()}
      />
      <LoadingContent loading={utility.getLoading.screen} />
    </React.Fragment>
  );
};

export default App;
