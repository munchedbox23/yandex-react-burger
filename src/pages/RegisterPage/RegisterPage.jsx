import {
  PasswordInput,
  EmailInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Form } from "../../components/Form/Form";
import { RegisterLinks } from "../../components/Form/FormLinks/FormLinks";
import { useForm } from "../../hooks/useForm";
import { userRegister } from "../../services/features/user/auth";

export const RegisterPage = () => {
  const { formState, onChange, onSubmit } = useForm();

  return (
    <Form
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
        autoComplete="name"
      />
      <EmailInput
        name={"email"}
        isIcon={false}
        value={formState.email || ""}
        onChange={onChange}
        autoComplete="email"
      />
      <PasswordInput
        name={"password"}
        extraClass="mb-2"
        value={formState.password || ""}
        onChange={onChange}
        autoComplete="new-password"
      />
      <Button htmlType="submit" type="primary" size="large">
        Зарегистрироваться
      </Button>
    </Form>
  );
};
