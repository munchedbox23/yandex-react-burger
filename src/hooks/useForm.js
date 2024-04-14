import { useState } from "react";
import { useDispatch } from "react-redux";

export const useForm = () => {
  const [formState, setFormState] = useState({});
  const dispatch = useDispatch();

  const onChange = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e, func) => {
    e.preventDefault();
    dispatch(func(formState));
  };

  return {formState, onChange, setFormState, onSubmit};
};
