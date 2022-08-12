import { UserAPI } from "../api/httpRequest";
import { UserProps, NewUser } from "../types/user";

export function useLogin(values: UserProps) {
  UserAPI.loginTodo(values)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    })
    .catch((error) => {
      console.log(error);
      alert("아이디와 비밀번호를 확인해주세요");
    });
}

export function useSignIn(values: NewUser) {
  UserAPI.singUpTodo(values).then((res) => {
    localStorage.setItem("token", res.data.token);
    alert("계정 생성 완료, 자동 로그인 되었습니다!");
  });
}
