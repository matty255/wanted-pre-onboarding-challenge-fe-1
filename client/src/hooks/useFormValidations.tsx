import { NewUser } from "../types/user";

export default function validate(values: NewUser) {
  const errors: NewUser = { email: "", password: "", passwordConfirm: "" };
  if (!values.email) {
    errors.email = "이메일을 입력해주세요";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "이메일 주소의 형태로 입력해주세요";
  }
  if (!values.password) {
    errors.password = "비밀번호를 입력해주세요";
  } else if (values.password.length < 8) {
    errors.password = "비밀번호는 최소 8자입니다";
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "비밀번호를 한번더 입력해주세요";
  } else if (values.password !== values.passwordConfirm) {
    console.log(values.password);
    errors.passwordConfirm = "비밀번호가 일치하지 않아요!";
  }

  return errors;
}
