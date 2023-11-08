import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { dividerStyle } from "../../utils/constant";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const AccountWatchList = () => {
  const accountDetails = useSelector(
    (state: RootState) => state.accountWatchReducer
  );

  return (
    <Card elevation={0} sx={{ borderRadius: "1.5rem" }}>
      <CardHeader
        title={<Typography variant="h6">Account Watchlist</Typography>}
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
