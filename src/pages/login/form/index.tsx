import { Button, Col, Row } from "@/components";
import { ReanderField } from "@/utils";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

interface FormData {
  username: string;
  password: string;
}

interface FormLoginProps {
  onSubmit: (data: FormData) => void;
}

const FormLogin: React.FC<
  InjectedFormProps<FormData, FormLoginProps> & FormLoginProps
> = (props) => {
  const { handleSubmit, onSubmit } = props;

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
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

const ReduxFormLogin = reduxForm<FormData, FormLoginProps>({
  form: "FormLogin",
  enableReinitialize: true,
})(FormLogin);

export default ReduxFormLogin;
