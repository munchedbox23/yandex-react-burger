import {
  PasswordInput,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm } from "../../../hooks/useForm";

export const ProfileInfo = () => {
  const { formState, onChange } = useForm();
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
