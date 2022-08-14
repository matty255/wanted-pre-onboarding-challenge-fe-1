import React from "react";

type emailType = { email: string };

export const email = (value: emailType, error: emailType) => {
  if (value.email === "") {
    error.email = "이메일을 입력해주세요";
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    error.email = "이메일 주소의 형태로 입력해주세요";
  }
  return error.email;
};
