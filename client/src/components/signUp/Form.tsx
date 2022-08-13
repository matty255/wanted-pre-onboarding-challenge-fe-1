import React from "react";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/useFormValidations";
import { useLocation, Link, useNavigate } from "react-router-dom";
import * as el from "../../common";
import { useRecoilState } from "recoil";
import { loadingState } from "../../store/global";
import { UserAPI } from "../../api/httpRequest";
import { UserLoginInit, NewUserInit } from "../../static/constant/AuthInit";

import LoginForm from "./LoginForm";
import SignInForm from "./SignInForm";

const Form = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loading, setLoading] = useRecoilState(loadingState);
  const isLoginPage = pathname === "/";
  const isSignInPage = pathname === "/signin";

  const init = isLoginPage ? UserLoginInit : NewUserInit;
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  const { values, errors, handleChange, handleSubmit, isError } = useForm(
    login,
    validate,
    init
  );

  function login() {
    if (isLoginPage && "email" in values) {
      UserAPI.loginTodo(values)
        .then((res) => {
          alert("로그인 성공!");
        })
        .catch((error) => {
          console.log(error);
          alert("아이디와 비밀번호를 확인해주세요");
        });
    }
    if (isSignInPage && "passwordConfirm" in values) {
      UserAPI.singUpTodo(values).then((res) => {
        alert("계정 생성 완료, 자동 로그인 되었습니다!");
      });
    }
    setLoading(true);
    setTimeout(() => {
      navigate("/todo");
    }, 300);
  }

  return (
    <div className="h-screen w-full fixed pt-24 bg-yellow">
      {loading && <el.Spinner />}
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
