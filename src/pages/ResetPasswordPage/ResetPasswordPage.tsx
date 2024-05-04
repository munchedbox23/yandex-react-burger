import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Form } from "../../components/Form/Form";
import { ForgotLinks } from "../../components/Form/FormLinks/FormLinks";
import { useForm } from "../../hooks/useForm";
import { resetPassword } from "../../services/features/user/auth";
import { useNavigate, Navigate } from "react-router";
import { ROUTE } from "../../utils/constants";
import { FormEvent, useState } from "react";
import { IUserResetPassword } from "../../types/user-types";

export const ResetPasswordPage = () => {
  const { formState, onChange } = useForm<IUserResetPassword>({
    token: "",
    password: "",
  });
  const navigate = useNavigate();
  const [requestError, setRequestError] = useState<boolean>(false);
  const forgotSuccess: string | null = localStorage.getItem("forgotSuccess");

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetPassword(formState as { password: string; token: string })
      .then((res) => {
        if (res && res.success) {
          localStorage.removeItem("forgotSuccess");
          navigate(`/${ROUTE.mainLayout.login}`);
        }
      })
      .catch((error) => {
        setRequestError(true);
      });
  };
  return forgotSuccess ? (
    <Form
      onSubmit={handleReset}
      linkComponent={ForgotLinks}
      title="Восстановление пароля"
    >
      <PasswordInput
        name="password"
        extraClass="mb-2"
        onChange={onChange}
        value={formState?.password || ""}
        autoComplete="new-password"
      />
      <Input
        type={"text"}
        placeholder={"Введите код из письма"}
        name={"token"}
        size={"default"}
        extraClass="ml-1"
        value={formState?.token || ""}
        onChange={onChange}
        error={requestError}
        autoComplete="one-time-code"
      />
      <Button htmlType="submit" type="primary" size="large">
        Восстановить
      </Button>
    </Form>
  ) : (
    <Navigate to={`/${ROUTE.mainLayout.forgotPass}`} />
  );
};
