import { atom } from "recoil";
import { ToDoProps } from "../types/toDos";
export const signState = atom({
  key: "signState",
  default: {
    email: "",
    password: "",
  },
});

export const tokenState = atom({
  key: "authState",
  default: !!localStorage.getItem("token"),
});

export const toDoDetail = atom<ToDoProps | any>({
  key: "toDoDetail",
  default: {},
});
