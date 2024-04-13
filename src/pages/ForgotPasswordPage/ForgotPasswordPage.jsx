import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { ForgotLinks } from "../../components/SignForm/SignLinks/SignLinks";

export const ForgotPasswordPage = () => {
  return (
    <SignForm linkComponent={ForgotLinks} title="Восстановление пароля">
      <Input
        type={"email"}
        placeholder={"Укажите e-mail"}
        name={"forgot"}
        size={"default"}
        extraClass="ml-1"
        value="1"
        onChange={(e) => e.preventDefault()}
      />
      <Button htmlType="button" type="primary" size="large">
        Восстановить
      </Button>
    </SignForm>
  );
};
