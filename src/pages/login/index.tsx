import { themesActions } from "@/reduxStore/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import FormLogin from "./form";
type LoginProps = RouteComponentProps;

const Login: React.FC<LoginProps> = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(themesActions.handleSetPageSidebar(false));
    dispatch(themesActions.handleSetPageHeader(false));
    dispatch(themesActions.handleSetFooter(false));

    return () => {
      dispatch(themesActions.handleSetPageHeader(true));
      dispatch(themesActions.handleSetPageSidebar(true));
      dispatch(themesActions.handleSetFooter(true));
    };
  }, [dispatch]);

  const loginProses = () => {
    props.history.push("/dashboard");
  };
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
          <FormLogin onSubmit={() => loginProses()} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
