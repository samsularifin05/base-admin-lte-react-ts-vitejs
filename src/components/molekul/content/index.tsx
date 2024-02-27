import { useAppSelector } from "@/reduxStore";
import AppRoute from "@/router/routes";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
const Content = () => {
  const theme = useAppSelector((state) => state.theme);

  const location = useLocation();

  const setTitle = (path: string, routeArray: any) => {
    let appTitle;

    routeArray.forEach((row: any) => {
      row.children.forEach((el: any) => {
        if (el.path === path) {
          appTitle = el.title;
        }
      });
    });
    document.title =
      (appTitle ? appTitle : "Halaman Admin") + " | Color Admin Base";
  };

  useEffect(() => {
    const { pathname } = location;

    setTitle(pathname, AppRoute);
  });

  const sidebarAndHeader =
    theme.handleSetPageHeader && theme.handleSetPageSidebar;
  return (
    <div className={theme.handleSetPageSidebar ? "app-content " : ""}>
      <div
        className={sidebarAndHeader ? "content-wrapper" : ""}
        style={{
          overflowX: sidebarAndHeader ? "scroll" : undefined,
          height: sidebarAndHeader ? "600px" : undefined,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
