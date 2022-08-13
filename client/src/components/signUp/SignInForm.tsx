import React from "react";
import * as el from "../../common";
import { SignInProps } from "../../types/user";

const SignInForm = ({ handleChange, values, errors }: SignInProps) => {
  return (
    <>
      <el.Label
        title="Email"
        isError={errors.email !== ""}
        errorMessage={errors.email}
        content={
          <el.Input
            variant="validate"
            autoComplete="off"
            className={errors.email && "text-red-500 w-full"}
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email || ""}
            required
          />
        }
      />
      <el.Label
        title="Password"
        isError={errors.password !== ""}
        errorMessage={errors.password}
        content={
          <el.Input
            variant="validate"
            autoComplete="on"
            className={errors.password && "text-red-500"}
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
        }
      />
      {"passwordConfirm" in values && "passwordConfirm" in errors && (
        <el.Label
          title="Password Confirm"
          isError={errors.passwordConfirm !== ""}
          errorMessage={errors.passwordConfirm || ""}
          content={
            <el.Input
              variant="validate"
              autoComplete="on"
              className={errors.passwordConfirm && "text-red-500"}
              type="password"
              name="passwordConfirm"
              onChange={handleChange}
              value={values.passwordConfirm || ""}
              required
            />
          }
        />
      )}
    </>
  );
};

export default SignInForm;
