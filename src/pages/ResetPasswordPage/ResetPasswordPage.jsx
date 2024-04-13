import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { ForgotLinks } from "../../components/SignForm/SignLinks/SignLinks";
import { useState } from "react";

export const ResetPasswordPage = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    e.preventDefault();
  };

  return (
    <SignForm linkComponent={ForgotLinks} title="Восстановление пароля">
      <PasswordInput
        onChange={onChange}
        value={value}
        name={"password"}
        extraClass="mb-2"
      />
      <Input
        type={"text"}
        placeholder={"Введите код из письма"}
        name={"reset"}
        size={"default"}
        extraClass="ml-1"
        value={value}
        onChange={(e) => e.preventDefault()}
      />
      <Button htmlType="button" type="primary" size="large">
        Восстановить
      </Button>
    </SignForm>
  );
};
