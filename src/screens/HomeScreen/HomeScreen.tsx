import { Grid, Stack, useMediaQuery } from "@mui/material";
import SideBar from "../../components/SideBar/SideBar";
import AccountChart from "../../components/AccountChart/AccountChart";
import InvoicesChart from "../../components/InvoicesChart/InvoicesChart";
import CashFlowChart from "../../components/CashFlowChart/CashFlowChart";
import AccountWatchList from "../../components/AccountWatchList/AccountWatchList";

const HomeScreen = () => {
  const isLgScreen = useMediaQuery("(min-width: 1280px)");

  const section = {
    height: "100%",
    paddingTop: 0,
    backgroundColor: "#fff",
    borderRadius: "1.5rem",
  };

  return (
    <Stack
      direction="row"
      sx={{ marginTop: "5rem", marginLeft: isLgScreen ? "18%" : 0 }}
    >
      {isLgScreen && <SideBar />}

      <div
        style={{
          position: "relative",
          height: "max-content",
          padding: "2rem",
          backgroundColor: "#efeeee",
        }}
      >
        <Grid container spacing={3} alignItems="stretch">
          <Grid item md={6} sm={12} xs={12}>
            <div style={section}>
              <AccountChart />
            </div>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <div style={section}>
              <InvoicesChart />
            </div>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <div style={section}>
              <CashFlowChart />
            </div>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <div style={section}>
              <AccountWatchList />
            </div>
          </Grid>
        </Grid>
      </div>
    </Stack>
  );
};

export default HomeScreen;
