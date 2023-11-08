import {
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchBar = () => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  const isSmallScreen = useMediaQuery("(max-width: 550px)");

  const searchClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const open = Boolean(anchorElement);
  const id = open ? "simple-popover" : undefined;

  const searchBar = (
    <TextField
      id="search-bar"
      size="small"
      InputProps={{
        style: {
          borderRadius: "1rem",
          backgroundColor: "#e6e6e6",
        },
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="medium" />
          </InputAdornment>
        ),
      }}
      sx={{
        "& fieldset": {
          border: "none",
        },
      }}
    />
  );

  return (
    <>
      {/*Showing or Hiding the search bar based on screensize */}

      {!isSmallScreen && searchBar}

      {isSmallScreen && (
        <IconButton aria-label="search-btn-phone" onClick={searchClickHandler}>
          <SearchIcon sx={{ color: "black" }} />
        </IconButton>
      )}

      <Popover
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
    </>
  );
};

export default SearchBar;
