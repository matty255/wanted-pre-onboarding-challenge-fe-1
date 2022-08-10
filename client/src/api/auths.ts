import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { UserAPI } from "./httpRequest";
import { UserProps } from "../types/user";

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation(
    (values: UserProps) =>
      UserAPI.loginTodo({
        email: values.email,
        password: values.password,
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["todos"]),
    }
  );
}
