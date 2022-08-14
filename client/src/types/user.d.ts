import React from "react";

interface UserProps {
  email: string;
  password: string;
}

interface NewUser extends UserProps {
  passwordConfirm: string;
}

type UserList = UserProps[];

interface LoginProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: UserProps;
  errors: UserProps;
}

interface SignInProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: NewUser;
  values: NewUser;
}

type User = UserProps | NewUser;

export { UserProps, UserList, NewUser, LoginProps, SignInProps, User };
