import { atom } from "recoil";

export const timeState = atom({
  key: "timeState",
  default: {
    time: 0,
    startTime: 0,
  },
});

export const cutTime = atom({
  key: "cutTime",
  default: "am",
});

export const weekdayArray = atom({
  key: "weekdayArray",
  default: [""],
});
