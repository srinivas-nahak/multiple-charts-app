import { Avatar, Badge, IconButton, Stack } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import OptionsDrawer from "./OptionsDrawer";
import { useDispatch } from "react-redux";
import { accountChartActions } from "../store/accountChartSlice";
import { invoiceChartActions } from "../store/invoicesChartSlice";
import { cashflowChartActions } from "../store/cashflowChartSlice";
import SearchBar from "./SearchBar";
import { accountWatchActions } from "../store/accountWatchSlice";

const TopBar = () => {
  const dispatch = useDispatch();

  const refreshData = () => {
    dispatch(accountChartActions.getNewAccountData());
    dispatch(invoiceChartActions.getNewInvoiceData());
    dispatch(cashflowChartActions.getNewCashFlowData());
    dispatch(accountWatchActions.getNewAccountWatchData());
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      <img
        src="/assiduus-logo-dark.webp"
        alt="logo"
        style={{ width: "9rem" }}
      />
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <IconButton aria-label="new-data-fetch" onClick={refreshData}>
          <CachedRoundedIcon sx={{ color: "#63b948" }} />
        </IconButton>

        <SearchBar />

        <Badge
          overlap="circular"
          badgeContent=" "
          variant="dot"
          color="success"
        >
          <NotificationsIcon fontSize="medium" />
        </Badge>
        <Avatar
          alt="Dummy User"
          src="images/ava_davis.jpg"
          sx={{ width: "2rem", height: "2rem" }}
        />

        <OptionsDrawer />
      </Stack>
    </Stack>
  );
};

export default TopBar;

//Using Appbar
// return (
//   <React.Fragment>
//     <AppBar
//       sx={{
//         flexDirection: "row",
//         justifyItems: "center",
//         alignContent: "space-between",
//         margin: 0,
//         padding: 0,
//         boxShadow: "none",
//         background: "white",
//       }}
//     >
//       <Toolbar
//         disableGutters
//         sx={{ flex: 1, justifyContent: "space-evenly" }}
//       >
//         <Box sx={{ display: { md: "flex" }, mr: 1 }}>
//           <img src="/assiduus-logo-dark.webp" alt="logo" />
//         </Box>
//         <IconButton
//           aria-label="new-data-fetch"
//           onClick={refreshData}
//           sx={{ marginLeft: "auto" }}
//         >
//           <CachedRoundedIcon sx={{ color: "#63b948" }} />
//         </IconButton>
//         <TextField
//           id="search-bar"
//           size="small"
//           InputProps={{
//             //className: styles["search-bar"],
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon fontSize="medium" />
//               </InputAdornment>
//             ),
//           }}
//         />
//         <Badge
//           overlap="circular"
//           badgeContent=" "
//           variant="dot"
//           color="success"
//         >
//           <NotificationsIcon fontSize="medium" />
//         </Badge>
//         <Avatar
//           alt="Dummy User"
//           src="images/ava_davis.jpg"
//           sx={{ width: "2rem", height: "2rem" }}
//         />

//         <OptionsDrawer />
//       </Toolbar>
//     </AppBar>
//   </React.Fragment>
// );
