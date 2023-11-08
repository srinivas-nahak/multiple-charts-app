import { createTheme } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const h6Theme = createTheme();
h6Theme.typography.h6 = {
  fontSize: "1.2rem",
  fontWeight: 500,
  [h6Theme.breakpoints.up("xs")]: {
    fontSize: "1rem",
  },
  [h6Theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [h6Theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  [h6Theme.breakpoints.up("lg")]: {
    fontSize: "1.2rem",
  },
};

export { h6Theme };

// const breakpoints = createBreakpoints({});

// const h6Theme = createTheme({
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
