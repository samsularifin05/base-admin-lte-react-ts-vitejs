import { themesActions, utilityActions } from "@/reduxStore/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/reduxStore";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FormLoginDto } from "./dto/formLoginDto";
import { Navigate } from "react-router-dom";
import { ReanderField, setItem } from "@/utils";

import { Button } from "@/components";

const Login = (props: InjectedFormProps<FormLoginDto>) => {
  const dispatch = useDispatch<AppDispatch>();
  const utility = useAppSelector((state) => state.utility);

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

  const { handleSubmit } = props;

  const handleFormSubmit = (dataForm: FormLoginDto) => {
    dispatch(utilityActions.setLoading({ screen: true }));
    setItem("userdata", {
      token: 1231,
      username: dataForm.username,
    });
    setTimeout(() => {
      dispatch(utilityActions.isLogin(true));
      dispatch(utilityActions.stopLoading());
    }, 300);
  };

  if (utility.getIsLogin) {
    return <Navigate to="/admin/dashboard" />;
  }
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
          <form method="post" onSubmit={handleSubmit(handleFormSubmit)}>
            <Field
              name="username"
              component={ReanderField}
              iconFormGroup="fas fa-envelope"
              enableenter
              nouperCase
              placeholder="Silahkan Masukan Username"
            />
            <Field
              name="password"
              type="password"
              component={ReanderField}
              placeholder="Silahkan Masukan Password"
              iconFormGroup="fas fa-lock"
              enableenter
              nouperCase
              formGroup
            />
            <Button
              textLoading="Waiting"
              type="submit"
              color="primary"
              block
              title="Sign In"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm<FormLoginDto>({
  form: "Login",
})(Login);
