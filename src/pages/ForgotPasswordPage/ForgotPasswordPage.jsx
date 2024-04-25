import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { ForgotLinks } from "../../components/SignForm/SignLinks/SignLinks";
import { useForm } from "../../hooks/useForm";
import { forgotPassword } from "../../services/features/user/auth";
import { useNavigate } from "react-router";
import { ROUTE } from "../../utils/constants";
import { useState } from "react";
import { ProfileLoader } from "../../components/Preloader/ProfileLoader/ProfileLoader";

export const ForgotPasswordPage = () => {
  const { formState, onChange } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    forgotPassword(formState.forgot).then((res) => {
      navigate(ROUTE.mainLayout.resetPass);
      localStorage.setItem("forgotSuccess", JSON.stringify(res.message));
      setIsLoading(false);
    });
  };

  return isLoading ? (
    <ProfileLoader />
  ) : (
    <SignForm
      onSubmit={onSubmit}
      linkComponent={ForgotLinks}
      title="Восстановление пароля"
    >
      <Input
        type="email"
        placeholder={"Укажите e-mail"}
        name={"forgot"}
        size={"default"}
        extraClass="ml-1"
        value={formState.forgot || ""}
        onChange={onChange}
        autoComplete="email"
      />
      <Button htmlType="submit" type="primary" size="large">
        Восстановить
      </Button>
    </SignForm>
  );
};
