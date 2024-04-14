import {
  PasswordInput,
  EmailInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SignForm } from "../../components/SignForm/SignForm";
import { RegisterLinks } from "../../components/SignForm/SignLinks/SignLinks";
import { useForm } from "../../hooks/useForm";
import { userRegister } from "../../services/features/user/auth";
import { useSelector } from "react-redux";
import { ProfileLoader } from "../../components/Preloader/ProfileLoader/ProfileLoader";

export const RegisterPage = () => {
  const { formState, onChange, onSubmit } = useForm();
  const isRequestLoading = useSelector((store) => store.user.isRequestLoading);

  return isRequestLoading ? (
    <ProfileLoader />
  ) : (
    <SignForm
      onSubmit={(e) => onSubmit(e, userRegister)}
      linkComponent={RegisterLinks}
      title="Регистрация"
    >
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
      <Button htmlType="submit" type="primary" size="large">
        Зарегистрироваться
      </Button>
    </SignForm>
  );
};
