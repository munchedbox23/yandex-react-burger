import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { LoginLinks } from "../../components/SignForm/SignLinks/SignLinks";
import { useForm } from "../../hooks/useForm";
import { userLogin } from "../../services/features/user/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "../../utils/constants";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
  const { formState, onChange } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const from = location.state?.from?.pathname || ROUTE.userProfile.profile;

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(formState))
      .then(() => navigate(from))
      .catch((error) => console.error(error));
  };

  return (
    <SignForm
      onSubmit={(e) => onLogin(e)}
      linkComponent={LoginLinks}
      title="Вход"
    >
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
      <Button htmlType="submit" type="primary" size="large">
        Войти
      </Button>
    </SignForm>
  );
};
