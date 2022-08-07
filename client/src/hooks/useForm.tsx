import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { signState } from "../store/global";
import { NewUser, UserProps } from "../types/user";

const useForm = (callback: Function, validate: Function) => {
  const [values, setValues] = useState<NewUser>({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState<NewUser>({
    email: "",
    password: "",
    passwordConfirm: "",
  });
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
