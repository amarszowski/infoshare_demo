import { create } from "zustand";

type NotificationState = {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error";
  showNotification: (
    message: string,
    severity: "success" | "info" | "warning" | "error",
  ) => void;
  closeNotification: () => void;
};

export const useNotificationStore = create<NotificationState>((set) => ({
  open: false,
  message: "",
  severity: "success",
  showNotification: (message, severity) =>
    set({ open: true, message, severity }),
  closeNotification: () => set((state) => ({ ...state, open: false })),
}));
