import {
  PasswordInput,
  EmailInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { RegisterLinks } from "../../components/SignForm/SignLinks/SignLinks";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {
  const { formState, onChange } = useForm();

  return (
    <SignForm linkComponent={RegisterLinks} title="Регистрация">
      <Input
        type={"text"}
        placeholder={"Имя"}
        name={"name"}
        size={"default"}
        extraClass="ml-1"
        value={formState.name || ""}
        onChange={onChange}
      />
      <EmailInput
        name={"email"}
        isIcon={false}
        value={formState.email || ""}
        onChange={onChange}
      />
      <PasswordInput
        name={"password"}
        extraClass="mb-2"
        value={formState.password || ""}
        onChange={onChange}
      />
      <Button htmlType="button" type="primary" size="large">
        Зарегистрироваться
      </Button>
    </SignForm>
  );
};
