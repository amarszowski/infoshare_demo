import { Button } from "@mui/material";
import { buttonStyles } from "../styles/styles.ts";
import { useNotification } from "../context/NotificationContext.tsx";

const MyButton = () => {
  const { showNotification } = useNotification();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={buttonStyles}
        onClick={() => showNotification("Thanks from Context :)", "success")}
      >
        Click me
      </Button>
    </>
  );
};

export default MyButton;
