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
import { useState } from "react";

export const ResetPasswordPage = () => {
  const { formState, onChange } = useForm();
  const navigate = useNavigate();
  const [requestError, setRequestError] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    resetPassword(formState)
      .then((res) => {
        if (res.success) {
          localStorage.removeItem("forgotSuccess");
          navigate(`/${ROUTE.mainLayout.login}`);
        }
      })
      .catch((error) => {
        console.error(error);
        setRequestError(true);
      });
  };
  return JSON.parse(localStorage.getItem("forgotSuccess")) ? (
    <Form linkComponent={ForgotLinks} title="Восстановление пароля">
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
      <Button
        onClick={(e) => handleReset(e)}
        htmlType="button"
        type="primary"
        size="large"
      >
        Восстановить
      </Button>
    </Form>
  ) : (
    <Navigate to={`/${ROUTE.mainLayout.forgotPass}`} />
  );
};
