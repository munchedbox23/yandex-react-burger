export type TFormKey = "email" | "password" | "name" | "token";

export type TFormData = {
  [key in TFormKey]?: string;
};
