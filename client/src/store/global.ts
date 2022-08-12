import { atom } from "recoil";
import { ToDoDetail } from "../types/toDos";
export const signState = atom({
  key: "signState",
  default: {
    email: "",
    password: "",
  },
});

export const toDoDetail = atom<ToDoDetail | null>({
  key: "toDoDetail",
  default: null,
});
