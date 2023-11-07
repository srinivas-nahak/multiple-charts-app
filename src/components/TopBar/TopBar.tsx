import { Avatar, Badge, InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import styles from "./TopBar.module.css";

const TopBar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={styles["top-bar"]}
    >
      <img src="/assiduus-logo-dark.webp" alt="logo" style={{ width: "15%" }} />
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
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
        />
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
        <ArrowDropDownRoundedIcon fontSize="large" />
      </Stack>
    </Stack>
  );
};

export default TopBar;
