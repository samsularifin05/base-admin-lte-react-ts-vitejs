import { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { themesActions } from "@/reduxStore";
import { useDispatch } from "react-redux";
import { userData } from "@/utils";

export const ProtectedRoute = ({ children }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData.length !== 0) {
      dispatch(themesActions.handleSetPageHeader(true));
      dispatch(themesActions.handleSetPageSidebar(true));
      dispatch(themesActions.handleSetFooter(true));
      dispatch(themesActions.handleSetContent(true));
    }
  }, [dispatch]);
  if (userData.length === 0) {
    return <Redirect to="/login-admin" />;
  }
  return children;
};
