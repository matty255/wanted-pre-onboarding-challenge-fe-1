import { atom } from "recoil";

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

export const weekdayArray = atom({
  key: "weekdayArray",
  default: [""],
});
