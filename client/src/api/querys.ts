import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { ToDoList, ToDoProps, NewToDo } from "../types/toDos";
import { ToDosAPI } from "./httpRequest";
import { useNavigate } from "react-router-dom";
export function getToDos() {
  return useQuery(["todos"], () =>
    ToDosAPI.getToDos().then((response) => response.data)
  );
}

export function getToDoById() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation((id: string) => ToDosAPI.getToDoById(id), {
    onSuccess: () => queryClient.invalidateQueries(["todo"]),
    onError: () => {
      localStorage.setItem("token", "");
      navigate("/", { replace: true });
    },
  });
}

export function createTodo() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation((create: NewToDo) => ToDosAPI.createToDo(create), {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
    onError: () => {
      localStorage.setItem("token", "");
      navigate("/", { replace: true });
    },
  });
}

export function updateToDo(id: string) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation((update: NewToDo) => ToDosAPI.updateToDo(update, id), {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
    onError: () => {
      localStorage.setItem("token", "");
      navigate("/", { replace: true });
    },
  });
}

export function deleteToDo(id: string) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(() => ToDosAPI.deleteToDo(id), {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
    onError: () => {
      localStorage.setItem("token", "");
      navigate("/", { replace: true });
    },
  });
}
