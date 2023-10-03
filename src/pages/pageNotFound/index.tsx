import { PanelContent } from "@/components";
import { AppDispatch, themesActions, useAppSelector } from "@/reduxStore";
import { Link, userData } from "@/utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const PageNotFound = () => {
  const theme = useAppSelector((state) => state.theme);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userData.length === 0) {
      dispatch(themesActions.handleSetPageSidebar(false));
      dispatch(themesActions.handleSetPageHeader(false));
      dispatch(themesActions.handleSetFooter(false));
    } else {
      dispatch(themesActions.handleSetPageHeader(true));
      dispatch(themesActions.handleSetPageSidebar(true));
      dispatch(themesActions.handleSetFooter(true));
    }
    return () => {
      dispatch(themesActions.handleSetPageHeader(true));
      dispatch(themesActions.handleSetPageSidebar(true));
      dispatch(themesActions.handleSetFooter(true));
    };
  }, [dispatch]);

  return theme.handleSetPageSidebar ? (
    <>
      {userData && (
        <PanelContent headerContent>
          <div className="error-page container" style={{ marginTop: "15%" }}>
            <h2 className="headline text-warning"> 404</h2>
            <div className="error-content">
              <h3>
                <i className="fas fa-exclamation-triangle text-warning" /> Oops!
                Page not found.
              </h3>
              <p>
                We could not find the page you were looking for. Meanwhile, you
                may <Link to="/dashboard">return to dashboard</Link> or try
                using the search form.
              </p>
            </div>
          </div>
        </PanelContent>
      )}
    </>
  ) : (
    <div className="d-flex justify-content-center align-items-center">
      <div id="main">
        <div className="fof">
          <h1>Halaman Tidak Ditemukan</h1>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
