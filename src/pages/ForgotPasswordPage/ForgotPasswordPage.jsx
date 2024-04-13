import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { ForgotLinks } from "../../components/SignForm/SignLinks/SignLinks";
import { useForm } from "../../hooks/useForm";

export const ForgotPasswordPage = () => {
  const { formState, onChange } = useForm();

  return (
    <SignForm linkComponent={ForgotLinks} title="Восстановление пароля">
      <Input
        type={"email"}
        placeholder={"Укажите e-mail"}
        name={"forgot"}
        size={"default"}
        extraClass="ml-1"
        value={formState.forgot || ""}
        onChange={onChange}
      />
      <Button htmlType="button" type="primary" size="large">
        Восстановить
      </Button>
    </SignForm>
  );
};
