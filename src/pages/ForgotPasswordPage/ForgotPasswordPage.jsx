import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { ForgotLinks } from "../../components/SignForm/SignLinks/SignLinks";
import { useForm } from "../../hooks/useForm";
import { forgotPassword } from "../../services/features/user/auth";
import { useNavigate } from "react-router";
import { ROUTE } from "../../utils/constants";

export const ForgotPasswordPage = () => {
  const { formState, onChange } = useForm();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    forgotPassword(formState).then((res) => {
      console.log(res);
      if (res.success) {
        navigate(ROUTE.mainLayout.resetPass);
      }
    });
  };

  return (
    <SignForm
      onSubmit={(e) => onSubmit(e)}
      linkComponent={ForgotLinks}
      title="Восстановление пароля"
    >
      <Input
        type="email"
        placeholder={"Укажите e-mail"}
        name={"forgot"}
        size={"default"}
        extraClass="ml-1"
        value={formState.forgot || ""}
        onChange={onChange}
      />
      <Button htmlType="submit" type="primary" size="large">
        Восстановить
      </Button>
    </SignForm>
  );
};
