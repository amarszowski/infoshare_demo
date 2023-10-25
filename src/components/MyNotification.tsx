import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { snackbarStyles } from "../styles/styles.ts";
import { useNotificationStore } from "../zustand/store.ts";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);

const MyNotification = () => {
  const { open, message, severity, closeNotification } = useNotificationStore();
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={closeNotification}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={snackbarStyles}
    >
      <Alert onClose={closeNotification} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MyNotification;
