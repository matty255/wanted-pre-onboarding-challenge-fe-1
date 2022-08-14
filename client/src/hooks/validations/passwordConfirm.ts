import React from "react";

type passwordConfirmType = { password: string; passwordConfirm: string };

export const passwordConfirm = (
  value: passwordConfirmType,
  error: passwordConfirmType
) => {
  if (
    "passwordConfirm" in value &&
    "passwordConfirm" in error &&
    !value.passwordConfirm
  ) {
    error.passwordConfirm = "비밀번호를 한번더 입력해주세요";
  } else if (
    "passwordConfirm" in value &&
    "passwordConfirm" in error &&
    value.password !== value.passwordConfirm
  ) {
    error.passwordConfirm = "비밀번호가 일치하지 않아요!";
  }
  return error.passwordConfirm;
};
