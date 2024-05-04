import {
  PasswordInput,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useForm } from "../../../hooks/useForm";
import { useAppSelector } from "../../../services/store/hooks";
import { FC, useEffect, useState } from "react";
import { Buttons } from "../Buttons/Buttons";
import { editUser } from "../../../services/features/user/auth";
import { IUser } from "../../../types/user-types";

type TProfileInfo = IUser & { password?: string };

export const ProfileInfo: FC = () => {
  const { formState, onChange, setFormState, onSubmit } = useForm<TProfileInfo>(
    { name: "", email: "", password: "" }
  );
  const [isVisible, setIsVisible] = useState(false);
  const user = useAppSelector((store) => store.user.user);

  useEffect(() => {
    if (user) {
      setFormState({ name: user.name, email: user.email });
    }
  }, [user!.name, user!.email]);

  useEffect(() => {
    if (
      formState.name !== user!.name ||
      formState.email !== user!.email ||
      formState.password
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [formState, user!.name, user!.email]);

  const onCancel = (): void => {
    setFormState({
      name: user!.name,
      email: user!.email,
      password: "",
    });
  };

  return (
    <form onSubmit={(e) => onSubmit(e, editUser)}>
      <Input
        placeholder={"Имя"}
        onChange={onChange}
        icon={"EditIcon"}
        value={formState?.name || ""}
        name={"name"}
        size={"default"}
        extraClass="mb-6"
        autoComplete="name"
      />
      <EmailInput
        onChange={onChange}
        value={formState?.email || ""}
        name={"email"}
        placeholder="Логин"
        isIcon={true}
        extraClass="mb-6"
        autoComplete="email"
      />
      <PasswordInput
        onChange={onChange}
        value={formState?.password || ""}
        name={"password"}
        icon="EditIcon"
        autoComplete="new-password"
      />
      <Buttons onCancel={onCancel} isVisible={isVisible} />
    </form>
  );
};
