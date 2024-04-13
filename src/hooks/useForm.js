import { useState } from "react";

export const useForm = () => {
  const [formState, setFormState] = useState({});

  const onChange = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  }

  return {formState, onChange}
};
