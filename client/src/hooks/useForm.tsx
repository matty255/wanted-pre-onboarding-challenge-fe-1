import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { signState } from "../store/global";
import { UserProps } from "../types/user";

const useForm = (callback: Function, validate: Function) => {
  const [values, setValues] = useState<UserProps>({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (
      Object.values(errors)[0] === "" &&
      Object.values(errors)[1] === "" &&
      isSubmitting
    ) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
