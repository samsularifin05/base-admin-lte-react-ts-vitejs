import { Navigate } from "react-router-dom";

import { getItem } from "@/utils";
import { UserLogin } from "@/interface";

export const ProtectedRoute = ({ children }: any) => {
  const userData: UserLogin[] = getItem<UserLogin[]>("userdata");
  const isLoggedIn = userData.length === 0 ? false : true;

  if (isLoggedIn) {
    return <Navigate to={"/admin/dashboard"} />;
  } else {
    return children;
  }
};
