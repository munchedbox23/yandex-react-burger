import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { ForgotLinks } from "../../components/SignForm/SignLinks/SignLinks";
import { useForm } from "../../hooks/useForm";
import { resetPassword } from "../../services/features/user/auth";
import { useNavigate } from "react-router";
import { ROUTE } from "../../utils/constants";

export const ResetPasswordPage = () => {
  const { formState, onChange } = useForm();
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    resetPassword(formState)
      .then((res) => {
        console.log(res);
        navigate(`/${ROUTE.mainLayout.login}`);
      })
      .catch((error) => console.error(error));
  };
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
      <Button
        onClick={(e) => handleReset(e)}
        htmlType="button"
        type="primary"
        size="large"
      >
        Восстановить
      </Button>
    </SignForm>
  );
};
