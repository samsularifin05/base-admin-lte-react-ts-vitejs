import { Navigate } from "react-router-dom";
import { themesActions, useAppSelector } from "@/reduxStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const ProtectedRoute = ({ children }: any) => {
  const utility = useAppSelector((state) => state.utility);
  const dispatch = useDispatch();

  useEffect(() => {
    if (utility.getIsLogin) {
      dispatch(themesActions.handleSetPageHeader(true));
      dispatch(themesActions.handleSetPageSidebar(true));
      dispatch(themesActions.handleSetFooter(true));
    }
  }, [dispatch, utility.getIsLogin]);

  if (!utility.getIsLogin) {
    return <Navigate to={"/login-admin"} />;
  } else {
    return children;
  }
};
