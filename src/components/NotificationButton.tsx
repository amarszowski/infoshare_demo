import { useState } from "react";
import { Button } from "@mui/material";
import Notification from "./Notification";
import { buttonStyles } from "../styles";

const NotificationButton = () => {
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "info" | "warning" | "error",
  });

  const showNotification = (
    message: string,
    severity: "success" | "info" | "warning" | "error",
  ) => {
    setNotification({ open: true, message, severity });
  };

  const closeNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={buttonStyles}
        onClick={() => showNotification("Thanks :)", "success")}
      >
        Click me
      </Button>
      <Notification
        open={notification.open}
        onClose={closeNotification}
        message={notification.message}
        severity={notification.severity}
      />
    </>
  );
};

export default NotificationButton;
