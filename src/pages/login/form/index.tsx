import { Button, Col, Row } from "@/components";
import { ReanderField, setItem, useDispatch } from "@/utils";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { AppDispatch, utilityActions } from "@/reduxStore";
import { FormLoginDto } from "../dto/formLoginDto";
import { useNavigate } from "react-router-dom";

const FormLogin = (props: InjectedFormProps<FormLoginDto>) => {
  const { handleSubmit } = props;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleFormSubmit = (dataForm: FormLoginDto) => {
    dispatch(utilityActions.setLoading({ screen: true }));
    setTimeout(() => {
      setItem("userdata", {
        token: 1231,
        username: dataForm.username,
      });
      setTimeout(() => {
        navigate("/admin/dashboard");
        dispatch(utilityActions.stopLoading());
        setTimeout(() => {
          window.location.reload();
        }, 300);
      }, 300);
    }, 1000);
  };

  return (
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
      <Row>
        <Col size="12">
          <Button
            textLoading="Waiting"
            type="submit"
            color="primary"
            block
            title="Sign In"
          />
        </Col>
      </Row>
    </form>
  );
};

export default reduxForm<FormLoginDto>({
  form: "FormLogin",
})(FormLogin);
