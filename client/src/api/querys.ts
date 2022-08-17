import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { ToDoList, ToDoProps, ToDoDetail, NewToDo } from "../types/toDos";
import { ToDosAPI } from "./httpRequest";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import React from "react";

const Keys = {
  all: ["todos"] as const,
  details: () => [...Keys.all, "detail"] as const,
  detail: (id: string) => [...Keys.details(), id] as const,
};

export function useGetToDos() {
  return useQuery(
    Keys.all,
    () => ToDosAPI.getToDos().then((response) => response.data),
    {
      onSuccess: () => {
        // console.log("로딩 완료");
      },
      useErrorBoundary: (error: AxiosError) =>
        error instanceof AxiosError && error.response?.status !== undefined,
    }
  );
}

export function useGetToDoById(id: string) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useQuery(Keys.detail(id), () => ToDosAPI.getToDoById(id), {
    retry: 1,
    useErrorBoundary: false,
    // onSuccess: () => {
    //   queryClient.invalidateQueries(Keys.detail(id));
    // },
    onError: (error: AxiosError) => {
      if (error !== undefined && error instanceof AxiosError) {
        queryClient.invalidateQueries(Keys.detail(id));
        navigate("/todo");
      }
    },
  });
}

export function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation((create: NewToDo) => ToDosAPI.createToDo(create), {
    onSuccess: () => {
      queryClient.invalidateQueries(Keys.all);
      // alert("등록 완료!");
    },
    useErrorBoundary: (error: AxiosError) =>
      error instanceof AxiosError && error.response?.status !== undefined,
  });
}

export function useUpdateToDo(id: string) {
  const queryClient = useQueryClient();
  return useMutation((update: NewToDo) => ToDosAPI.updateToDo(update, id), {
    onSuccess: () => queryClient.invalidateQueries(Keys.all),
    useErrorBoundary: (error: AxiosError) =>
      error instanceof AxiosError && error.response?.status !== undefined,
  });
}

export function useDeleteToDo(id: string) {
  const queryClient = useQueryClient();
  return useMutation(() => ToDosAPI.deleteToDo(id), {
    onSuccess: () => queryClient.invalidateQueries(Keys.all),
    useErrorBoundary: (error: AxiosError) =>
      error instanceof AxiosError && error.response?.status !== undefined,
  });
}
