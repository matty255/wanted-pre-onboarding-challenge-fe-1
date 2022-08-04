import { UserProps } from "../types/user";

export default function validate(values: UserProps) {
  const errors: UserProps = { email: "", password: "" };
  if (!values.email) {
    errors.email = "이메일을 입력해주세요";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "이메일 주소의 형태로 입력해주세요";
  }
  if (!values.password) {
    errors.password = "비밀번호를 입력해주세요";
  } else if (values.password.length < 8) {
    errors.password = "비밀번호는 최소 8자입니다";
    //   } else if (!/\d/.test(values.password)) {
    //     errors.password = "Password must contain atleast 1 number";
    //   } else if (!/[!@#$%&?]/g.test(values.password)) {
    //     errors.password = "Password must contain atleast 1 special character";
    //   } else if (!/[A-Z]/g.test(values.password)) {
    //     errors.password = "Password must contain atleast 1 capitol letter";
  }
  return errors;
}
