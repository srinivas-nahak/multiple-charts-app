import { createSlice } from "@reduxjs/toolkit";
import { AccountDetailsType } from "../utils/customTypes";

const initialState: AccountDetailsType[] = [
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

const accountWatchSlice = createSlice({
  name: "accountWatchSlice",
  initialState,
  reducers: {
    getNewAccountWatchData(state) {
      const tempData = state.map((data) => {
        const percentageChange = Math.random() * 0.2 - 0.1; // Range of -10% to +10%
        const newThisMonthValue = data.thisMonth * (1 + percentageChange);

        const ytdPercentageChange = newThisMonthValue / data.ytd - 1;
        const newYtd = data.ytd * (1 + ytdPercentageChange);

        return {
          ...data,
          thisMonth: newThisMonthValue,
          ytd: newYtd,
        };
      });
    },
  },
});

export const accountWatchActions = accountWatchSlice.actions;

export default accountWatchSlice.reducer;
