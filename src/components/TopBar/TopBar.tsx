import {
  Avatar,
  Badge,
  IconButton,
  InputAdornment,
  Popover,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import styles from "./TopBar.module.css";
import OptionsDrawer from "../OptionsDrawer";
import { useDispatch } from "react-redux";
import { accountChartActions } from "../../store/accountChartSlice";
import { invoiceChartActions } from "../../store/invoicesChartSlice";
import { cashflowChartActions } from "../../store/cashflowChartSlice";
import React, { useState } from "react";

const TopBar = () => {
  const dispatch = useDispatch();

  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  const isSmallScreen = useMediaQuery("(max-width: 550px)");

  const refreshData = () => {
    dispatch(accountChartActions.getNewAccountData());
    dispatch(invoiceChartActions.getNewInvoiceData());
    dispatch(cashflowChartActions.getNewCashFlowData());
  };

  const searchClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const open = Boolean(anchorElement);
  const id = open ? "simple-popover" : undefined;

  const searchBar = (
    <TextField
      id={styles["search-bar"]}
      size="small"
      InputProps={{
        className: styles["search-bar"],
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="medium" />
          </InputAdornment>
        ),
      }}
      sx={{ "& fieldset": { border: "none" } }}
    />
  );

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={styles["top-bar"]}
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
        {isSmallScreen && (
          <IconButton
            aria-label="search-btn-phone"
            onClick={searchClickHandler}
          >
            <SearchIcon sx={{ color: "black" }} />
          </IconButton>
        )}
        {!isSmallScreen && searchBar}
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

        <Popover
          className={styles["search-bar-container"]}
          id={id}
          open={open}
          anchorEl={anchorElement}
          onClose={() => setAnchorElement(null)}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          sx={{
            "& .MuiPopover-paper": {
              borderRadius: "1rem",
              border: "none",
            },
          }}
        >
          {searchBar}
        </Popover>

        <OptionsDrawer />
      </Stack>
    </Stack>
  );
};

export default TopBar;

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
