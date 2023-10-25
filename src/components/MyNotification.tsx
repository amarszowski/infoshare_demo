import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { snackbarStyles } from "../styles/styles.ts";
import { useAtom } from "jotai";
import { notificationAtom } from "../jotai/notificationAtom.ts";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);

const MyNotification = () => {
  const [notification, setNotification] = useAtom(notificationAtom);

  const closeNotification = () => {
    setNotification({ ...notification, open: false });
  };

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
