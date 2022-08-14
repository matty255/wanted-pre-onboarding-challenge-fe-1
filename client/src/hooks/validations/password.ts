import React from "react";

type passwordType = { password: string };

export const password = (value: passwordType, error: passwordType) => {
  if (!value.password) {
    error.password = "비밀번호를 입력해주세요";
  } else if (value.password.length < 8) {
    error.password = "비밀번호는 최소 8자입니다";
  }
  return error.password;
};
