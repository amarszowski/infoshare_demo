import { Box } from "@mui/material";
import MyButton from "./components/MyButton.tsx";
import { boxStyles } from "./styles/styles.ts";
import { NotificationProvider } from "./context/NotificationContext.tsx";
import MyNotification from "./components/MyNotification.tsx";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Box sx={boxStyles}>
      <MyButton />
    </Box>
  );
};

export default App;
