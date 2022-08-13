import { atom } from "recoil";
import { ToDoDetail } from "../types/toDos";

export const toDoDetail = atom<ToDoDetail | null>({
  key: "toDoDetail",
  default: null,
});
