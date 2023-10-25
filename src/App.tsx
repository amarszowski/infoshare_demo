import { Box } from "@mui/material";
import MyButton from "./components/MyButton.tsx";
import { boxStyles } from "./styles/styles.ts";
import MyNotification from "./components/MyNotification.tsx";

const App = () => {
  return (
    <Box sx={boxStyles}>
      <MyButton />
      <MyNotification />
    </Box>
  );
};

export default App;
