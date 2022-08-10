import React from "react";
import useForm from "../../hooks/useForm";
import validate from "../../hooks/useFormValidations";
import { Navigate, useLocation, Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "../../store/global";
import { useLogin } from "../../api/auths";
import { UserAPI } from "../../api/httpRequest";
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
                  className={errors.password && "text-red-500"}
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
            {location.pathname === "/signin" && (
              <div className="">
                <label className="label">Password Confirm</label>
                <div className="control">
                  <input
                    className={errors.passwordConfirm && "text-red-500"}
                    type="password"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={values.passwordConfirm || ""}
                    autoComplete="currentPassword"
                    required
                  />
                </div>
                {errors.passwordConfirm && (
                  <p className="text-red-500">{errors.passwordConfirm}</p>
                )}
              </div>
            )}
            {location.pathname === "/sign" && (
              <>
                <button
                  type="submit"
                  className="bg-blue-600 mt-4 p-2 px-4 rounded-md hover:bg-blue-100 active:bg-blue-600 disabled:bg-gray-300"
                  disabled={isError}
                >
                  Login
                </button>
                <Link
                  to="/signin"
                  className="bg-blue-600 mt-4 p-2 px-4 rounded-md hover:bg-blue-100 active:bg-blue-600 ml-3"
                >
                  가입하기
                </Link>
              </>
            )}
            {location.pathname === "/signin" && (
              <>
                <button
                  type="submit"
                  className="bg-blue-600 mt-4 p-2 px-4 rounded-md hover:bg-blue-100 active:bg-blue-600"
                >
                  가입하기
                </button>
                <Link
                  to="/sign"
                  className="bg-blue-600 mt-4 p-2 px-4 rounded-md hover:bg-blue-100 active:bg-blue-600 ml-3"
                >
                  돌아가기
                </Link>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
