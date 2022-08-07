interface UserProps {
  email: string;
  password: string;
}

interface NewUser {
  email: string;
  password: string;
  passwordConfirm?: string;
}

type UserList = UserProps[];

export { UserProps, UserList, NewUser };
