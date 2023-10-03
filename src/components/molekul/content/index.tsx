import MenuRoutes from "@/router";
import {
  Route,
  RouteComponentProps,
  Skeleton,
  Suspense,
  useEffect,
  withRouter,
} from "@/utils";
import { PageNotFound } from "@/pages";

import { useAppSelector } from "@/reduxStore";
import { RouteInterface } from "@/interface";

type Props = RouteComponentProps;

const Content: React.FC<Props> = (props) => {
  const setTitle = (path: string, routeArray: RouteInterface[]) => {
    let pageTitle: string | undefined;
    for (let i = 0; i < routeArray.length; i++) {
      if (routeArray[i].path === path) {
        pageTitle = `Admin Lte | ${routeArray[i].title}`;
      }
    }
    document.title = pageTitle || "Admin Lte | React App";
  };

  useEffect(() => {
    setTitle(props.history.location.pathname, MenuRoutes);
    return () => {
      setTitle(props.history.location.pathname, MenuRoutes);
    };
  });

  const cekmenu = MenuRoutes.find(
    (list) => list.path === props.history.location.pathname
  );
  const theme = useAppSelector((state) => state.theme);

  return (
    <Suspense fallback={<Skeleton width="100%" height="1000px" />}>
      <div className={theme.handleSetPageSidebar ? "app-content " : ""}>
        {cekmenu === undefined ? (
          <PageNotFound />
        ) : (
          MenuRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route?.component}
              />
            );
          })
        )}
      </div>
    </Suspense>
  );
};

export default withRouter(Content);
