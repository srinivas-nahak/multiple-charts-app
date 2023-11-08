import {
  Button,
  Container,
  Dialog,
  DialogContent,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { useState } from "react";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";

const NewSalesInvoiceDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleOpen = () => {
    setShowDialog(true);
  };
  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      <MenuList>
        <MenuItem
          sx={{
            backgroundColor: "#e6e6e6",
            borderRadius: "0.8rem",
            marginRight: "1rem",
            color: "#63b948",
          }}
          onClick={handleOpen}
        >
          <Typography variant="subtitle2">New Sales Invoice</Typography>
        </MenuItem>
      </MenuList>
      <Dialog
        open={showDialog}
        onClose={handleClose}
        sx={{
          ".MuiDialog-paper": {
            borderRadius: "1.5rem",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            backgroundColor: "rgba(255,255,255,0.9)",
          },
        }}
      >
        <DialogContent>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1.5rem",
            }}
          >
            <BackupRoundedIcon sx={{ fontSize: "6rem", color: "#63b948" }} />
            <Typography variant="h5"> Drag & Drop your Invoice</Typography>
            <Typography sx={{ margin: "1rem auto" }}> or</Typography>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{ color: "#63b948", borderRadius: "0.8rem" }}
            >
              Browse Files
            </Button>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewSalesInvoiceDialog;
