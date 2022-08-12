import { atom } from "recoil";
import { ToDoDetail } from "../types/toDos";

export const loadingState = atom({ key: "loadingState", default: false });

export const toDoDetail = atom<ToDoDetail | null>({
  key: "toDoDetail",
  default: null,
});
