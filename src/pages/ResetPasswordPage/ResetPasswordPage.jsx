import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { ForgotLinks } from "../../components/SignForm/SignLinks/SignLinks";
import { useForm } from "../../hooks/useForm";

export const ResetPasswordPage = () => {
  const { formState, onChange } = useForm();

  return (
    <SignForm linkComponent={ForgotLinks} title="Восстановление пароля">
      <PasswordInput
        name="password"
        extraClass="mb-2"
        onChange={onChange}
        value={formState?.password || ""}
      />
      <Input
        type={"text"}
        placeholder={"Введите код из письма"}
        name={"reset"}
        size={"default"}
        extraClass="ml-1"
        value={formState?.reset || ""}
        onChange={onChange}
      />
      <Button htmlType="button" type="primary" size="large">
        Восстановить
      </Button>
    </SignForm>
  );
};
