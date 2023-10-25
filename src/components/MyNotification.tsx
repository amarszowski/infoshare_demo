import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { snackbarStyles } from "../styles/styles.ts";
import { useNotification } from "../context/NotificationContext.tsx";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);

const MyNotification = () => {
  const { notification, closeNotification } = useNotification();
  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={6000}
      onClose={closeNotification}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={snackbarStyles}
    >
      <Alert onClose={closeNotification} severity={notification.severity}>
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default MyNotification;
