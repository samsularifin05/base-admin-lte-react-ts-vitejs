import { Content, Footer, Header, Sidebar } from "./components";
import {
  addWindowClass,
  calculateWindowSize,
  removeWindowClass,
  useWindowSize,
  useDispatch,
  useEffect,
  Suspense,
  userData,
  Skeleton,
} from "./utils";
import {
  AppDispatch,
  themesActions,
  useAppSelector,
  utilityActions,
} from "./reduxStore";

const App = () => {
  const theme = useAppSelector((state) => state.theme);
  const utility = useAppSelector((state) => state.utility);

  const dispatch = useDispatch<AppDispatch>();
  const windowSize = useWindowSize();

  const handleToggleMenuSidebar = () => {
    dispatch(themesActions.setSidebarToggle(!theme.getSidebarToggle));
  };

  useEffect(() => {
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");

    const size = calculateWindowSize(windowSize.width);
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
    theme.getSidebarToggle,
    utility.getScreenSize,
    windowSize.width,
  ]);

  return (
    <Suspense fallback={<Skeleton width="100%" height="1000px" />}>
      <div className="wrapper">
        {userData.length !== 0 ? (
          <>
            {theme.handleSetPageHeader && <Header />}
            {theme.handleSetPageSidebar && <Sidebar />}
            {theme.handleSetContent && <Content />}
            {theme.handleSetFooter && <Footer />}
          </>
        ) : (
          <>{theme.handleSetContent && <Content />}</>
        )}
      </div>
      <div
        id="sidebar-overlay"
        role="presentation"
        onClick={() => handleToggleMenuSidebar()}
      />
    </Suspense>
  );
};

export default App;
