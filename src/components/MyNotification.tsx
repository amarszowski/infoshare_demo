import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { snackbarStyles } from "../styles/styles.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";
import { closeNotification } from "../redux/slices/notificationSlice.ts";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);

const MyNotification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state: RootState) => state.notification);

  const handleClose = () => {
    dispatch(closeNotification());
  };

  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={snackbarStyles}
    >
      <Alert onClose={handleClose} severity={notification.severity}>
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default MyNotification;
