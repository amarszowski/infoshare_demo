import { Box } from "@mui/material";
import MyButton from "./components/MyButton.tsx";
import { boxStyles } from "./styles/styles.ts";

const App = () => {
  return (
    <Box sx={boxStyles}>
      <MyButton />
    </Box>
  );
};

export default App;
