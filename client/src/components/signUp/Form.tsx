import React from "react";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/useFormValidations";
import { useLocation, Link, useNavigate } from "react-router-dom";
import * as el from "../../common";
import { UserAPI } from "../../api/httpRequest";
import { UserLoginInit, NewUserInit } from "../../static/constant/AuthInit";
import { useMutation } from "@tanstack/react-query";
import LoginForm from "./LoginForm";
import SignInForm from "./SignInForm";
import { User } from "../../types/user";
import { AxiosError } from "axios";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../common/Modal";

const Form = () => {
  const { isShown, toggle } = useModal();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/";
  const isSignInPage = pathname === "/signin";
  const init = isLoginPage ? UserLoginInit : NewUserInit;
  const [message, setMessage] = React.useState(true);

  const { values, errors, handleChange, handleSubmit, isError } = useForm(
    login,
    validate,
    init
  );
  const { mutateAsync, isLoading } = useMutation(
    (values: User) =>
      isLoginPage ? UserAPI.loginTodo(values) : UserAPI.singUpTodo(values),
    {
      onSuccess: () => {
        isLoginPage ? setMessage(true) : setMessage(false);
        toggle();
      },
      useErrorBoundary: (error: AxiosError) =>
        error instanceof AxiosError && error.response?.status !== undefined,
    }
  );

  function login() {
    mutateAsync(values);
  }

  return (
    <div className="h-screen w-full fixed pt-24 bg-yellow max-w-7xl">
      {isLoading && <el.Spinner />}
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={<el.ModalContent confirm={message} />}
        contentText={"확인"}
        callback={() => navigate("/todo")}
      />
      <el.Box>
        <div className="">
          {isSignInPage ? (
            <el.Text variant="title">Sign up</el.Text>
          ) : (
            <el.Text variant="title">Login</el.Text>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {isLoginPage && <LoginForm {...{ handleChange, values, errors }} />}
            {isSignInPage &&
              "passwordConfirm" in values &&
              "passwordConfirm" in errors && (
                <SignInForm {...{ handleChange, values, errors }} />
              )}

            {isLoginPage && (
              <>
                <el.Button
                  type="submit"
                  className="disabled:bg-gray-300 "
                  disabled={isError}
                  variant="primary"
                >
                  Login
                </el.Button>
                <el.Button
                  variant="secondary"
                  type="button"
                  onClick={() => navigate("/signin", { replace: true })}
                >
                  가입하기
                </el.Button>
              </>
            )}
            {isSignInPage && (
              <>
                <el.Button
                  type="submit"
                  className="disabled:bg-gray-300"
                  disabled={isError}
                  variant="primary"
                >
                  가입하기
                </el.Button>
                <el.Button variant="secondary" type="button">
                  <Link to="/">돌아가기</Link>
                </el.Button>
              </>
            )}
          </form>
        </div>
      </el.Box>
    </div>
  );
};

export default Form;
