import { Button } from "@mui/material";
import { buttonStyles } from "../styles/styles.ts";
import { useDispatch } from "react-redux";
import { showNotification } from "../redux/slices/notificationSlice.ts";

const MyButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      showNotification({
        open: true,
        message: "Thanks from Redux :)",
        severity: "success",
      }),
    );
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
