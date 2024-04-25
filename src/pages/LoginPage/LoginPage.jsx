import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Form } from "../../components/Form/Form";
import { LoginLinks } from "../../components/Form/FormLinks/FormLinks";
import { useForm } from "../../hooks/useForm";
import { userLogin } from "../../services/features/user/auth";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../utils/constants";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
  const { formState, onChange } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(formState))
      .then(() => navigate(ROUTE.main))
      .catch((error) => console.error(error));
  };

  return (
    <Form
      onSubmit={(e) => onLogin(e)}
      linkComponent={LoginLinks}
      title="Вход"
    >
      <EmailInput
        onChange={onChange}
        value={formState.email || ""}
        name={"email"}
        isIcon={false}
        autoComplete="email"
      />
      <PasswordInput
        onChange={onChange}
        value={formState.password || ""}
        name={"password"}
        extraClass="mb-2"
        autoComplete="current-password"
      />
      <Button htmlType="submit" type="primary" size="large">
        Войти
      </Button>
    </Form>
  );
};
