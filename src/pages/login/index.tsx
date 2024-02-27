import { themesActions } from "@/reduxStore/actions";
import { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import FormLogin from "./form";
import { AppDispatch } from "@/reduxStore";
import { useNavigate } from "react-router-dom";
import { userData } from "@/utils";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.username) {
      navigate("/admin/dashboard");
    }
    dispatch(themesActions.handleSetPageSidebar(false));
    dispatch(themesActions.handleSetPageHeader(false));
    dispatch(themesActions.handleSetFooter(false));

    return () => {
      dispatch(themesActions.handleSetPageHeader(true));
      dispatch(themesActions.handleSetPageSidebar(true));
      dispatch(themesActions.handleSetFooter(true));
    };
  }, [dispatch, navigate]);

  return (
    <div className="login-box container" style={{ marginTop: "10%" }}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <div className="h1">
            <b>Admin</b>LTE
          </div>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
