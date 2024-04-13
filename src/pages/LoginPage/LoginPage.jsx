import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { LoginLinks } from "../../components/SignForm/SignLinks/SignLinks";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {
  const { formState, onChange } = useForm();

  return (
    <SignForm linkComponent={LoginLinks} title="Вход">
      <EmailInput
        onChange={onChange}
        value={formState.email || ""}
        name={"email"}
        isIcon={false}
      />
      <PasswordInput
        onChange={onChange}
        value={formState.password || ""}
        name={"password"}
        extraClass="mb-2"
      />
      <Button htmlType="button" type="primary" size="large">
        Войти
      </Button>
    </SignForm>
  );
};
