import { themesActions } from "@/reduxStore/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import FormLogin from "./form";
import { setItem, userData } from "@/utils";
import { AppDispatch } from "@/reduxStore";
type LoginProps = RouteComponentProps;

const Login: React.FC<LoginProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userData?.length !== 0) {
      props.history.push("/dashboard");
    }
    dispatch(themesActions.handleSetPageSidebar(false));
    dispatch(themesActions.handleSetPageHeader(false));
    dispatch(themesActions.handleSetFooter(false));

    return () => {
      dispatch(themesActions.handleSetPageHeader(true));
      dispatch(themesActions.handleSetPageSidebar(true));
      dispatch(themesActions.handleSetFooter(true));
    };
  }, [dispatch, props.history]);

  const loginProses = () => {
    setItem("userdata", {
      akses_token: "123123",
      namaCustomer: "DEMO",
    });
    setTimeout(() => {
      window.location.reload();
    }, 300);
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
