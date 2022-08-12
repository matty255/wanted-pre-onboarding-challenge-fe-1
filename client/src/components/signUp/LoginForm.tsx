import React from "react";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/useFormValidations";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import Label from "../../common/Label";
import { Box } from "../../common/Box";
import { useRecoilState } from "recoil";
import { loadingState } from "../../store/global";
import { Text } from "../../common/Text";
import { UserAPI } from "../../api/httpRequest";
import Spinner from "../../common/Spinner";

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
    login,
    validate
  );

  function login() {
    if (isLoginPage) {
      UserAPI.loginTodo(values)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
        })
        .catch((error) => {
          console.log(error);
          alert("아이디와 비밀번호를 확인해주세요");
        });
    }
    if (isSignInPage) {
      UserAPI.singUpTodo(values).then((res) => {
        localStorage.setItem("token", res.data.token);
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
      {loading && <Spinner />}
      <Box>
        <div className="">
          {isSignInPage ? (
            <Text variant="title">Sign up</Text>
          ) : (
            <Text variant="title">Login</Text>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <Label
              title="Email"
              isError={errors.email !== ""}
              errorMessage={errors.email}
              content={
                <Input
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
            <Label
              title="Password"
              isError={errors.password !== ""}
              errorMessage={errors.password}
              content={
                <Input
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

            {isSignInPage && (
              <Label
                title="Password Confirm"
                isError={errors.passwordConfirm !== ""}
                errorMessage={errors.passwordConfirm || ""}
                content={
                  <Input
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
