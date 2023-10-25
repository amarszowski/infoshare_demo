import { Box } from "@mui/material";
import MyButton from "./components/MyButton.tsx";
import { boxStyles } from "./styles/styles.ts";
import { NotificationProvider } from "./context/NotificationContext.tsx";
import MyNotification from "./components/MyNotification.tsx";

const App = () => {
  return (
    <Box sx={boxStyles}>
      <NotificationProvider>
        <MyButton />
        <MyNotification />
      </NotificationProvider>
    </Box>
  );
};

export default App;
