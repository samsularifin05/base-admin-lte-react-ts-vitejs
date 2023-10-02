import { Route, RouteComponentProps, withRouter } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { PageNotFound } from "@/pages";
import MenuRoutes from "@/router";
import Skeleton from "react-loading-skeleton";

type Props = RouteComponentProps;

const Content: React.FC<Props> = (props) => {
  const setTitle = (path: string, routeArray: any) => {
    let pageTitle;
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
  return (
    <Suspense fallback={<Skeleton width="100%" height={1000} />}>
      {MenuRoutes.find(
        (list) => list.path === props.history.location.pathname
      ) === undefined ? (
        <Route component={() => <PageNotFound />} />
      ) : (
        MenuRoutes.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route?.component}
          />
        ))
      )}
    </Suspense>
  );
};

export default withRouter(Content);
