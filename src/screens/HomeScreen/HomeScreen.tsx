import { Box, Stack } from "@mui/material";
import styles from "./HomeScreen.module.css";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import SideBar from "../../components/SideBar/SideBar";
import AccountChart from "../../components/AccountChart/AccountChart";
import InvoicesChart from "../../components/InvoicesChart/InvoicesChart";
import CashFlowChart from "../../components/CashFlowChart/CashFlowChart";

const HomeScreen = () => {
  return (
    <Stack direction="row" sx={{ marginTop: "5rem", marginLeft: "18%" }}>
      <SideBar />
      {/* <div
        style={{ width: "100%", height: "100vh", backgroundColor: "#efeeee" }}
      ></div> */}

      <div
        style={{
          width: "100%",
          height: "max-content",
          padding: "1.5rem",
          backgroundColor: "#efeeee",
        }}
      >
        <Grid container spacing={2.5}>
          <Grid xs={6}>
            <AccountChart />
          </Grid>
          <Grid xs={6}>
            <InvoicesChart />
          </Grid>
          <Grid xs={6}>
            <CashFlowChart />
          </Grid>
          <Grid xs={6}>
            <AccountChart />
          </Grid>
        </Grid>
      </div>
    </Stack>
  );
};

export default HomeScreen;
