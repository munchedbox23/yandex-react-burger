import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { LoginLinks } from "../../components/SignForm/SignLinks/SignLinks";
import { useState } from "react";

export const LoginPage = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    e.preventDefault();
  };
  return (
    <SignForm linkComponent={LoginLinks} title="Вход">
      <EmailInput
        onChange={(e) => onChange(e)}
        value={value}
        name={"email"}
        isIcon={false}
      />
      <PasswordInput
        onChange={(e) => onChange(e)}
        value={value}
        name={"password"}
        extraClass="mb-2"
      />
      <Button htmlType="button" type="primary" size="large">
        Войти
      </Button>
    </SignForm>
  );
};
