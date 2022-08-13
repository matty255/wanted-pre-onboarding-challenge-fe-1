import React, { useState, useEffect } from "react";
import { NewUser, UserProps } from "../types/user";
import { useDebounce } from "./useDebounce";
import { useLocation } from "react-router-dom";

const useForm = (
  callback: Function,
  validate: Function,
  init: UserProps | NewUser
) => {
  const { pathname } = useLocation();
  const [values, setValues] = useState(init);
  const [errors, setErrors] = useState(init);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const debouncedKeyword = useDebounce(values, 200);
  console.log(values);
  useEffect(() => {
    setErrors(validate(debouncedKeyword, init));
  }, [debouncedKeyword]);

  useEffect(() => {
    if (isSubmitting) {
      callback();
    }
  }, [isSubmitting]);

  useEffect(() => {
    setValues(init);
  }, [pathname]);

  const errorList = Object.entries(errors).filter(
    ([key, value]) => value === ""
  );

  useEffect(() => {
    if (errorList.length === Object.entries(values).length) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [debouncedKeyword, errors]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
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
