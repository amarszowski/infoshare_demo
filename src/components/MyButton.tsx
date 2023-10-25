import { Button } from "@mui/material";
import { buttonStyles } from "../styles/styles.ts";
import { useNotificationStore } from "../zustand/store.ts";

const MyButton = () => {
  const showNotification = useNotificationStore(
    (state) => state.showNotification,
  );

  const handleClick = () => {
    showNotification("Thanks from Zustand :)", "success");
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={buttonStyles}
        onClick={handleClick}
      >
        Click me
      </Button>
    </>
  );
};

export default MyButton;
