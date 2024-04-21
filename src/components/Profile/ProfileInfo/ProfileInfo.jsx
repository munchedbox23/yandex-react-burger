import {
  PasswordInput,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm } from "../../../hooks/useForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const ProfileInfo = () => {
  const { formState, onChange, setFormState } = useForm();
  const user = useSelector((store) => store.user.user);

  useEffect(() => {
    if (user.name && user.email) {
      setFormState({ ...formState, name: user.name, email: user.email });
    }
  }, [user.name, user.email]);

  return (
    <form>
      <Input
        placeholder={"Имя"}
        onChange={onChange}
        icon={"EditIcon"}
        value={formState?.name || ""}
        name={"name"}
        size={"default"}
        extraClass="mb-6"
      />
      <EmailInput
        onChange={onChange}
        value={formState?.email || ""}
        name={"email"}
        placeholder="Логин"
        isIcon={true}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={onChange}
        value={formState?.password || ""}
        name={"password"}
        icon="EditIcon"
      />
    </form>
  );
};
