import { createTheme } from "@mui/material";

const customTheme = createTheme();

customTheme.typography.h5 = {
  fontWeight: "700",
  [customTheme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
  [customTheme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
};

customTheme.typography.h6 = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  [customTheme.breakpoints.up("xs")]: {
    fontSize: "1rem",
  },
  [customTheme.breakpoints.up("sm")]: {
    fontSize: "1.1rem",
  },
};

customTheme.typography.subtitle2 = {
  fontSize: "0.8rem",
  fontWeight: "600",
};

customTheme.components = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        "&:focus": {
          outline: "2px solid #e6e6e6",
        },
      },
    },
  },
};

export { customTheme };

// const breakpoints = createBreakpoints({});

// const customTheme = createTheme({
//   typography: {
//     h6: {
//       fontSize: "1.5rem",
//       fontWeight: 600,
//       [breakpoints.down("sm")]: {
//         fontSize: "1rem",
//       },
//       [breakpoints.up("md")]: {
//         fontSize: "1.2rem",
//       },
//       [breakpoints.up("lg")]: {
//         fontSize: "1.5rem",
//       },
//     },
//   },
// });
