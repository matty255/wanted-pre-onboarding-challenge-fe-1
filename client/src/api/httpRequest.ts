import axios from "axios";
import { ToDoList, ToDoProps, NewToDo, ToDoDetail } from "../types/toDos";
import { UserProps } from "../types/user";
import instance from "./instance";

export const ToDosAPI = {
  getToDos: () => instance.get<ToDoList>(`/todos`),
  getToDoById: (id: String) => instance.get<ToDoDetail>(`/todos/${id}`),
  createToDo: (create: NewToDo) => instance.post(`todos`, create),
  updateToDo: async (update: NewToDo, id: string) =>
    await instance.put(`/todos/${id}`, update),
  deleteToDo: async (id: string) => await instance.delete(`/todos/${id}`),
};

export const UserAPI = {
  loginTodo: async (data: UserProps) =>
    await instance.post(`/users/login`, data),
  singUpTodo: async (data: UserProps) =>
    await instance.post(`/users/create`, data),
};
