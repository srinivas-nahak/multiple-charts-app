import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "./SiderBar.module.css";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useState } from "react";

//sx={{ width: "20%", textAlign: "center" }}

const SideBar = () => {
  //   const commonListButtonStyle = {
  //     display: "grid",
  //     gridTemplateColumns: "0.5fr 0.5fr",
  //     placeItems: "center",
  //     placeContent: "center",
  //   };

  const [selectedButton, setSelectedButton] = useState(0);

  const itemClickHandler = (selectedItem: number) => {
    setSelectedButton(selectedItem);
  };

  return (
    <List
      sx={{
        width: "18%",
        height: "100vh",
        paddingTop: "2rem",
        position: "fixed",
        left: 0,
        boxSizing: "border-box",
        backgroundColor: "white",
      }}
      dense
    >
      <ListItem
        onClick={() => itemClickHandler(0)}
        className={
          selectedButton === 0
            ? `${styles["side-bar-item-container-active"]}`
            : `${styles["side-bar-item-container-inactive"]}`
        }
      >
        <ListItemButton disableRipple sx={{ pointerEvents: "none" }}>
          <ListItemIcon
            sx={{
              minWidth: "2.5rem",
            }}
          >
            <ViewQuiltRoundedIcon
              fontSize="small"
              sx={selectedButton === 0 ? { color: "white" } : {}}
            />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>
      <ListItem
        onClick={() => itemClickHandler(1)}
        className={
          selectedButton === 1
            ? `${styles["side-bar-item-container-active"]}`
            : `${styles["side-bar-item-container-inactive"]}`
        }
      >
        <ListItemButton disableRipple sx={{ pointerEvents: "none" }}>
          <ListItemIcon sx={{ minWidth: "2.5rem" }}>
            <AccountBalanceWalletRoundedIcon
              fontSize="small"
              sx={selectedButton === 1 ? { color: "white" } : {}}
            />
          </ListItemIcon>
          <ListItemText primary="Accounts" />
        </ListItemButton>
      </ListItem>
      <ListItem
        onClick={() => itemClickHandler(2)}
        className={
          selectedButton === 2
            ? `${styles["side-bar-item-container-active"]}`
            : `${styles["side-bar-item-container-inactive"]}`
        }
      >
        <ListItemButton disableRipple sx={{ pointerEvents: "none" }}>
          <ListItemIcon sx={{ minWidth: "2.5rem" }}>
            <AttachMoneyRoundedIcon
              fontSize="small"
              sx={selectedButton === 2 ? { color: "white" } : {}}
            />
          </ListItemIcon>
          <ListItemText primary="Payroll" />
        </ListItemButton>
      </ListItem>

      <ListItem
        onClick={() => itemClickHandler(3)}
        className={
          selectedButton === 3
            ? `${styles["side-bar-item-container-active"]}`
            : `${styles["side-bar-item-container-inactive"]}`
        }
      >
        <ListItemButton disableRipple sx={{ pointerEvents: "none" }}>
          <ListItemIcon sx={{ minWidth: "2.5rem" }}>
            <DescriptionRoundedIcon
              fontSize="small"
              sx={selectedButton === 3 ? { color: "white" } : {}}
            />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
      </ListItem>

      <ListItem
        onClick={() => itemClickHandler(4)}
        className={
          selectedButton === 4
            ? `${styles["side-bar-item-container-active"]}`
            : `${styles["side-bar-item-container-inactive"]}`
        }
      >
        <ListItemButton disableRipple sx={{ pointerEvents: "none" }}>
          <ListItemIcon sx={{ minWidth: "2.5rem" }}>
            <PersonIcon
              fontSize="small"
              sx={selectedButton === 4 ? { color: "white" } : {}}
            />
          </ListItemIcon>
          <ListItemText primary="Advisor" />
        </ListItemButton>
      </ListItem>

      <ListItem
        onClick={() => itemClickHandler(5)}
        className={
          selectedButton === 5
            ? `${styles["side-bar-item-container-active"]}`
            : `${styles["side-bar-item-container-inactive"]}`
        }
      >
        <ListItemButton disableRipple sx={{ pointerEvents: "none" }}>
          <ListItemIcon sx={{ minWidth: "2.5rem" }}>
            <ContactsIcon
              fontSize="small"
              sx={selectedButton === 5 ? { color: "white" } : {}}
            />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SideBar;

// return (
//     <ToggleButtonGroup orientation="vertical" sx={{ width: "20%" }}>
//       <ToggleButton
//         value="Dashboard"
//         sx={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "flex-start",
//           gap: "0.5rem",
//         }}
//       >
//         <ViewQuiltRoundedIcon fontSize="small" sx={selectedButton === 0 ? { color: "white" } : {}} />
//         <Typography>Dashboard</Typography>
//       </ToggleButton>
//       <ToggleButton
//         value="Accounts"
//         sx={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "flex-start",
//           gap: "0.5rem",
//           margin: "auto",
//         }}
//       >
//         <AccountBalanceWalletRoundedIcon fontSize="small" sx={selectedButton === 0 ? { color: "white" } : {}} />
//         Accounts
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
