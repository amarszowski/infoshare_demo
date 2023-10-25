import { atom } from "jotai";

export const notificationAtom = atom({
  open: false,
  message: "",
  severity: "success" as "success" | "info" | "warning" | "error",
});
