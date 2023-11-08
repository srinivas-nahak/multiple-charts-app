import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SideBar from "./SideBar/SideBar";
import { IconButton, useMediaQuery } from "@mui/material";
import { useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

type Anchor = "top" | "left" | "bottom" | "right";

const OptionsDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isLgScreen = useMediaQuery("(min-width: 1280px)");

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsDrawerOpen(open);
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <SideBar />
    </Box>
  );

  return (
    <div>
      <IconButton
        aria-label="sider-bar-opener"
        onClick={toggleDrawer(true)}
        disabled={isLgScreen}
      >
        <ArrowDropDownRoundedIcon fontSize="large" sx={{ color: "black" }} />
      </IconButton>
      <Drawer anchor={"top"} open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {list("top")}
      </Drawer>
    </div>
  );
};

export default OptionsDrawer;

//<MenuRoundedIcon fontSize="medium" sx={{ color: "black" }} />
