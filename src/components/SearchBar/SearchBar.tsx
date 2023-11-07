import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="medium" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
