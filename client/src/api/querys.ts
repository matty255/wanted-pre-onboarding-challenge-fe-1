import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { ToDoList, ToDoProps, NewToDo } from "../types/toDos";
import { ToDosAPI } from "./httpRequest";

export function useGetToDos() {
  return useQuery(["todos"], () =>
    ToDosAPI.getToDos().then((response) => response.data)
  );
}

export function getToDoById() {
  const queryClient = useQueryClient();
  return useMutation((id: string) => ToDosAPI.getToDoById(id), {
    onSuccess: () => queryClient.invalidateQueries(["todo"]),
  });
}

export function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation((create: NewToDo) => ToDosAPI.createToDo(create), {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });
}

export function getUpdateToDo(id: string) {
  const queryClient = useQueryClient();
  return useMutation((update: NewToDo) => ToDosAPI.updateToDo(update, id), {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });
}

export function getDeleteToDo(id: string) {
  const queryClient = useQueryClient();
  return useMutation(() => ToDosAPI.deleteToDo(id), {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });
}
