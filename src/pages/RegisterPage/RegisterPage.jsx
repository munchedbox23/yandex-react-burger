import {
  PasswordInput,
  EmailInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { RegisterLinks } from "../../components/SignForm/SignLinks/SignLinks";
import { useState } from "react";

export const RegisterPage = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    e.preventDefault();
  };
  return (
    <SignForm linkComponent={RegisterLinks} title="Регистрация">
      <Input
        type={"text"}
        placeholder={"Имя"}
        name={"name"}
        size={"default"}
        extraClass="ml-1"
        value={value}
        onChange={(e) => onChange(e)}
      />
      <EmailInput
        name={"email"}
        isIcon={false}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <PasswordInput
        name={"password"}
        extraClass="mb-2"
        value={value}
        onChange={(e) => onChange(e)}
      />
      <Button htmlType="button" type="primary" size="large">
        Зарегистрироваться
      </Button>
    </SignForm>
  );
};
