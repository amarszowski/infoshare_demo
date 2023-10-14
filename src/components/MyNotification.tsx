import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { snackbarStyles } from "../styles/styles.ts";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);

interface MyNotificationProps {
  open: boolean;
  onClose: () => void;
  message: string;
  severity: "success" | "info" | "warning" | "error";
}

const MyNotification = ({
  open,
  onClose,
  message,
  severity,
}: MyNotificationProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={snackbarStyles}
    >
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MyNotification;
