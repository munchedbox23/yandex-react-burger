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
import { useAppDispatch } from "../../services/store/hooks";
import { FC, FormEvent } from "react";
import { IUserLogin } from "../../types/user-types";

export const LoginPage: FC = () => {
  const { formState, onChange } = useForm<IUserLogin>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin(formState as IUserLogin))
      .then(() => navigate(ROUTE.main))
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={onLogin} linkComponent={LoginLinks} title="Вход">
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
