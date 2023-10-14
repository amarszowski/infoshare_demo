import { SxProps, Theme } from "@mui/system";

export const buttonStyles: SxProps<Theme> = {
  fontSize: "2rem",
  padding: "20px 40px",
};

export const boxStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  minWidth: "100vw",
};

export const snackbarStyles: SxProps<Theme> = {
  "& .MuiSnackbar-root": {
    maxWidth: "80%",
  },
  "& .MuiAlert-root": {
    fontSize: "1.5rem",
  },
};
