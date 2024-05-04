import { useState } from "react";
import { useAppDispatch } from "../services/store/hooks";
import { useNavigate } from "react-router";
import { ROUTE } from "../utils/constants";

export const useForm = <T>(input: T) => {
  const [formState, setFormState] = useState(input);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>, func: any) => {
    e.preventDefault();
    dispatch(func(formState))
      .then(() => navigate(`${ROUTE.userProfile.profile}`, { replace: true }))
      .catch((error: unknown) => console.error(error));
    setFormState(input);
  };

  return { formState, onChange, setFormState, onSubmit };
};
