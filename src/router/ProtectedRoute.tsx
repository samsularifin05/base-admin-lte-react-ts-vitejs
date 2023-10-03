import { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { themesActions } from "@/reduxStore";
import { useDispatch } from "react-redux";
import { getItem } from "@/utils";
import { UserLogin } from "@/interface";

export const ProtectedRoute = ({ children }: any) => {
  const userData = getItem<UserLogin[]>("userdata");
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      dispatch(themesActions.handleSetPageHeader(true));
      dispatch(themesActions.handleSetPageSidebar(true));
    }
  }, [dispatch, userData]);
  if (userData.length === 0) {
    return <Redirect to="/" />;
  }
  return children;
};
