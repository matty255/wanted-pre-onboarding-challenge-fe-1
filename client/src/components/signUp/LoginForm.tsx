import React from "react";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/useFormValidations";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import Label from "../../common/Label";
import { Box } from "../../common/Box";
import { useLogin, useSignIn } from "../../hooks/useSigns";
import { useRecoilState } from "recoil";
import { loadingState } from "../../store/global";
const Form = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loading, setLoading] = useRecoilState(loadingState);
  const isLoginPage = pathname === "/";
  const isSignInPage = pathname === "/signin";

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  const { values, errors, handleChange, handleSubmit, isError } = useForm(
    isLoginPage
      ? login
      : isSignInPage
      ? SignIn
      : () => alert("알수 없는 오류가 발생했습니다. 다시 시도해주세요"),
    validate
  );

  function login() {
    useLogin(values);
    setLoading(true);
    setTimeout(() => {
      navigate("/todo");
    }, 300);
  }

  function SignIn() {
    useSignIn(values);
    setLoading(true);
    setTimeout(() => {
      navigate("/todo");
    }, 300);
  }

  return (
    <div className="bg-white h-full">
      {loading && <div className="fixed top-0">로딩중</div>}
      <Box>
        <div className="">
          {isSignInPage ? <h1>회원가입하기</h1> : <h1>로그인하기</h1>}

          <form onSubmit={handleSubmit} noValidate>
            <Label
              title="Email Address"
              isError={errors.email !== ""}
              errorMessage={errors.email}
              content={
                <Input
                  tw="w-full"
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
            <Label
              title="Password"
              isError={errors.password !== ""}
              errorMessage={errors.password}
              content={
                <Input
                  tw="w-full"
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

            {isSignInPage && (
              <Label
                title="Password Confirm"
                isError={errors.passwordConfirm !== ""}
                errorMessage={errors.passwordConfirm || ""}
                content={
                  <Input
                    tw="w-full"
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
            {isLoginPage && (
              <>
                <Button
                  type="submit"
                  className="disabled:bg-gray-300 "
                  disabled={isError}
                  variant="primary"
                >
                  Login
                </Button>
                <Button variant="secondary" type="button">
                  <Link to="/signin">가입하기</Link>
                </Button>
              </>
            )}
            {isSignInPage && (
              <>
                <Button
                  type="submit"
                  className="disabled:bg-gray-300"
                  disabled={isError}
                  variant="primary"
                >
                  가입하기
                </Button>
                <Button variant="secondary" type="button">
                  <Link to="/">돌아가기</Link>
                </Button>
              </>
            )}
          </form>
        </div>
      </Box>
    </div>
  );
};

export default Form;
