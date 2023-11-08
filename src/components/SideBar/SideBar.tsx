import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./SiderBar.module.css";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useState } from "react";

const SideBar = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const itemClickHandler = (selectedItem: number) => {
    setSelectedButton(selectedItem);
  };

  const isLgScreen = useMediaQuery("(min-width: 1000px)");

  return (
    <List
      sx={
        isLgScreen
          ? {
              width: "18%",
              height: "100vh",
              paddingTop: "2rem",
              position: "fixed",
              left: 0,
              boxSizing: "border-box",
              backgroundColor: "white",
            }
          : {}
      }
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
              sx={{ color: selectedButton === 0 ? "white" : "black" }}
            />
          </ListItemIcon>

          <Typography variant="subtitle2">Dashboard</Typography>
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
              sx={{ color: selectedButton === 1 ? "white" : "black" }}
            />
          </ListItemIcon>

          <Typography variant="subtitle2">Accounts</Typography>
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
              sx={{ color: selectedButton === 2 ? "white" : "black" }}
            />
          </ListItemIcon>
          <Typography variant="subtitle2">Payroll</Typography>
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
              sx={{ color: selectedButton === 3 ? "white" : "black" }}
            />
          </ListItemIcon>
          <Typography variant="subtitle2">Reports</Typography>
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
              sx={{ color: selectedButton === 4 ? "white" : "black" }}
            />
          </ListItemIcon>
          <Typography variant="subtitle2">Advisor</Typography>
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
              sx={{ color: selectedButton === 5 ? "white" : "black" }}
            />
          </ListItemIcon>
          <Typography variant="subtitle2">Contacts</Typography>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default SideBar;
