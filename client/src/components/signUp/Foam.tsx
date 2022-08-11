import React from "react";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/useFormValidations";
import { Navigate, useLocation, Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "../../store/global";
import { useLogin } from "../../api/auths";
import { UserAPI } from "../../api/httpRequest";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import Label from "../../common/Label";
const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loginQuery = useLogin();
  const [tokens, setTokens] = useRecoilState(tokenState);

  const { values, errors, handleChange, handleSubmit, isError } = useForm(
    location.pathname === "/sign"
      ? login
      : location.pathname === "/signin"
      ? SignIn
      : () => alert("알수 없는 오류가 발생했습니다. 다시 시도해주세요"),
    validate
  );

  const token: string = localStorage.getItem("token") || "";

  function login() {
    loginQuery
      .mutateAsync(values)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setTokens(res.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("아이디와 비밀번호를 확인해주세요");
      });
    return <Navigate to="/" />;
  }

  function SignIn() {
    if (!isError) {
      UserAPI.singUpTodo(values).then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("계정 생성 완료, 자동 로그인 되었습니다!");
        navigate("/");
      });
    } else {
      return alert("비밀번호를 확인해주세요");
    }
  }

  return (
    <div className="bg-white m-24">
      {token && <Navigate to="/" />}
      <div className="bg-amber-300 p-10">
        <div className="">
          {location.pathname === "/signin" ? (
            <h1>회원가입하기</h1>
          ) : (
            <h1>로그인하기</h1>
          )}

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

            {location.pathname === "/signin" && (
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
            {location.pathname === "/sign" && (
              <>
                <Button
                  type="submit"
                  className="disabled:bg-gray-300 "
                  disabled={isError}
                  variant="primary"
                >
                  Login
                </Button>
                <Button variant="secondary">
                  <Link to="/signin">가입하기</Link>
                </Button>
              </>
            )}
            {location.pathname === "/signin" && (
              <>
                <Button
                  type="submit"
                  className="disabled:bg-gray-300"
                  disabled={isError}
                  variant="primary"
                >
                  가입하기
                </Button>
                <Button variant="secondary">
                  <Link to="/sign">돌아가기</Link>
                </Button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
