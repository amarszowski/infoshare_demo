import { Box } from "@mui/material";
import MyButton from "./components/MyButton.tsx";
import { boxStyles } from "./styles/styles.ts";
import MyNotification from "./components/MyNotification.tsx";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Box sx={boxStyles}>
      <Provider store={store}>
        <MyButton />
        <MyNotification />
      </Provider>
    </Box>
  );
};

export default App;
