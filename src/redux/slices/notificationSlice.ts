import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error";
}

const initialState: NotificationState = {
  open: false,
  message: "",
  severity: "success",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<NotificationState>) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    closeNotification: (state) => {
      state.open = false;
    },
  },
});

export const { showNotification, closeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
