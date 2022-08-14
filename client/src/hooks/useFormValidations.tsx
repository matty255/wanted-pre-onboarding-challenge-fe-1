import React from "react";
import { UserProps, NewUser } from "../types/user";
import * as validate from "./validations";

export default function useFormValidations(
  values: UserProps | NewUser,
  init: UserProps | NewUser
) {
  const errors = Object.assign({}, init);

  errors.email = validate.email(values, errors);
  errors.password = validate.password(values, errors);
  if ("passwordConfirm" in values && "passwordConfirm" in errors) {
    errors.passwordConfirm = validate.passwordConfirm(values, errors);
  }

  return errors;
}
