import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Form } from "../../components/Form/Form";
import { ForgotLinks } from "../../components/Form/FormLinks/FormLinks";
import { useForm } from "../../hooks/useForm";
import { forgotPassword } from "../../services/features/user/auth";
import { useNavigate } from "react-router";
import { ROUTE } from "../../utils/constants";
import { FC, FormEvent, useState } from "react";
import { ProfileLoader } from "../../ui/Preloader/ProfileLoader/ProfileLoader";

export const ForgotPasswordPage: FC = () => {
  const { formState, onChange } = useForm<{ email: string }>({ email: "" });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isValidForm, setIsValidForm] = useState(true);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (formState.email) {
      forgotPassword(formState.email).then((res) => {
        navigate(ROUTE.mainLayout.resetPass);
        localStorage.setItem("forgotSuccess", JSON.stringify(res.message));
        setIsLoading(false);
      });
    } else {
      setIsValidForm(false);
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <ProfileLoader />
  ) : (
    <Form
      onSubmit={onSubmit}
      linkComponent={ForgotLinks}
      title="Восстановление пароля"
    >
      <Input
        type="email"
        placeholder={"Укажите e-mail"}
        name={"email"}
        size={"default"}
        extraClass="ml-1"
        value={formState.email || ""}
        onChange={onChange}
        autoComplete="email"
        error={!isValidForm}
      />
      <Button htmlType="submit" type="primary" size="large">
        Восстановить
      </Button>
    </Form>
  );
};
