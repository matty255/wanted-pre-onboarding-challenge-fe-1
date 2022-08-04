import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/useFormValidations";
import { Navigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { UserProps } from "../../types/user";
import instance from "../../api/instance";
const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const token: string = localStorage.getItem("token") || "";
  const loginMutation = useMutation((values: UserProps) =>
    instance.post(`/users/login`, values)
  );
  function login() {
    loginMutation.mutateAsync(values).then((res) => {
      localStorage.setItem("token", res.data.token);
    });

    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white m-10">
      {token && <Navigate to="/" />}
      <div className="bg-blue-300 p-10">
        <div className="">
          <h1>로그인하기</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="">
              <label className="label">Email Address</label>
              <div className="control">
                <input
                  autoComplete="off"
                  className={errors.email && "text-red-500"}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email || ""}
                  required
                />
                {errors.email && <p className="">{errors.email}</p>}
              </div>
            </div>
            <div className="">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="text-red-500"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password || ""}
                  autoComplete="currentPassword"
                  required
                />
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 mt-4 p-2 px-4 rounded-md hover:bg-blue-100 active:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
