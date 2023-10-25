import { Button } from "@mui/material";
import { buttonStyles } from "../styles/styles.ts";
import { useSetAtom } from "jotai";
import { notificationAtom } from "../jotai/notificationAtom.ts";

const MyButton = () => {
  const setNotification = useSetAtom(notificationAtom);

  const showNotification = (
    message: string,
    severity: "success" | "info" | "warning" | "error",
  ) => {
    setNotification({ open: true, message, severity });
  };

  const handleClick = () => {
    showNotification("Thanks from Jotai :)", "success");
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
