import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { dividerStyle } from "../../utils/constant";
import { AccountDetailsType } from "../../utils/customTypes";
import { h6Theme } from "../../utils/fontSizeHelper";

const AccountWatchList = () => {
  const accountDetails: AccountDetailsType[] = [
    {
      account: "Sales",
      thisMonth: 1194.58,
      ytd: 11418.29,
    },
    {
      account: "Advertising",
      thisMonth: 6879.02,
      ytd: 9271.36,
    },
    {
      account: "Inventory",
      thisMonth: 4692.26,
      ytd: 9768.09,
    },
    {
      account: "Entertainment",
      thisMonth: 0.0,
      ytd: 0.0,
    },
    {
      account: "Product",
      thisMonth: 4652.1,
      ytd: 2529.9,
    },
  ];

  return (
    <Card elevation={0} sx={{ borderRadius: "1.5rem" }}>
      <CardHeader
        title={
          <ThemeProvider theme={h6Theme}>
            <Typography variant="h6">Account Watchlist</Typography>
          </ThemeProvider>
        }
        sx={{
          height: "2.8rem",
        }}
      />
      <Divider sx={dividerStyle} />
      <CardContent>
        <TableContainer>
          <Table
            sx={{
              minWidth: 300,
              "& td, & th": { border: 0 },
              "& .MuiTableCell-root": {
                typography: "subtitle2",
                //padding: "0.27rem",
              },
            }}
            aria-label="simple table"
            size="small"
          >
            <TableHead
              sx={{
                "& .MuiTableCell-root": {
                  color: "#ababab",
                },
              }}
            >
              <TableRow>
                <TableCell sx={{ paddingTop: 0 }}>Account</TableCell>
                <TableCell align="left" sx={{ paddingTop: 0 }}>
                  This Month
                </TableCell>
                <TableCell align="left" sx={{ paddingTop: 0 }}>
                  YTD
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accountDetails.map((accountDetail) => (
                <TableRow key={accountDetail.account}>
                  <TableCell component="th" scope="row">
                    {accountDetail.account}
                  </TableCell>
                  <TableCell align="left">{accountDetail.thisMonth}</TableCell>
                  <TableCell align="left">{accountDetail.ytd}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default AccountWatchList;
