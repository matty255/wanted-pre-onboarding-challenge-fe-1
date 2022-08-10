import React, { useState, useEffect } from "react";
import { NewUser } from "../types/user";
import { useDebounce } from "./useDebounce";
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
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const debouncedKeyword = useDebounce(values, 200);
  useEffect(() => {
    setErrors(validate(debouncedKeyword));
  }, [debouncedKeyword]);

  useEffect(() => {
    if (isSubmitting) {
      callback();
    }
  }, [isSubmitting]);

  useEffect(() => {
    if (Object.values(errors)[0] === "" && Object.values(errors)[1] === "") {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [debouncedKeyword, errors]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting((state) => !state);
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
    isError,
  };
};

export default useForm;
