import React from "react";
import { User } from "../types/user";
import * as validate from "./validations";

export default function useFormValidations(values: User, init: User): User {
  const errors = Object.assign({}, init);

  errors.email = validate.email(values, errors);
  errors.password = validate.password(values, errors);
  if ("passwordConfirm" in values && "passwordConfirm" in errors) {
    errors.passwordConfirm = validate.passwordConfirm(values, errors);
  }

  return errors;
}
