import { useState } from "react";
import { Box, Button } from "@mui/material";
import Notification from "./components/Notification";
import { buttonStyles, boxStyles } from "./styles";

const App = () => {
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
    <Box sx={boxStyles}>
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
    </Box>
  );
};

export default App;
