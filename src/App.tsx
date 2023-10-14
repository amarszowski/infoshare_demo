import { Box } from "@mui/material";
import NotificationButton from "./components/NotificationButton";
import { boxStyles } from "./styles";

const App = () => {
  return (
    <Box sx={boxStyles}>
      <NotificationButton />
    </Box>
  );
};

export default App;
