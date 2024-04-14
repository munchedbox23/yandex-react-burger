import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ROUTE } from "../utils/constants";

export const useForm = () => {
  const [formState, setFormState] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e, func) => {
    e.preventDefault();
    dispatch(func(formState))
    .then(() => navigate(`${ROUTE.userProfile.profile}`, {replace: true}))
    .catch((error) => console.error(error));
    setFormState({});
  };

  return {formState, onChange, setFormState, onSubmit};
};
