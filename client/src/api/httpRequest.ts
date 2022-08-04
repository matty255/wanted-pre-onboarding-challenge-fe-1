import axios from "axios";
import { ToDoList, ToDoProps, NewToDo } from "../types/toDos";
import { UserProps } from "../types/user";
import instance from "./instance";

export const getToDos = () =>
  instance.get<ToDoList>(`/todos`).then((response) => response.data);

export const getToDoById = (id: String) =>
  instance.get<ToDoList>(`/todos/${id}`).then((response) => response.data);

export const createToDo = async (data: NewToDo) => {
  const { data: response } = await instance.post(`/todos`, data);
  return response.data;
};

export const updateToDo = async (data: NewToDo, id: string) => {
  const { data: response } = await instance.put(`/todos/${id}`, data);
  return response.data;
};

export const deleteToDo = async (id: string) => {
  const response = await instance.delete(`/todos/${id}`);
  return response.data;
};

export const loginTodo = async (data: UserProps) => {
  const { data: response } = await instance.post(`/users/login`, data);
  return response.data;
};

export const singUpTodo = async (data: UserProps) => {
  const { data: response } = await instance.post(`/users/create`, data);
  return response.data;
};
