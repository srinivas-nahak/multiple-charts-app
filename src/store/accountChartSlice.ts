import { createSlice } from "@reduxjs/toolkit";
import { ChartSingleValueType } from "../utils/customTypes";
import { chartMaxValue } from "../utils/constant";

const initialState: ChartSingleValueType<number>[] = [
  { name: 9, value: 5 },
  { name: 10, value: 8 },
  { name: 11, value: 9 },
  { name: 12, value: 3 },
  { name: 13, value: 2 },
  { name: 14, value: 4 },
  { name: 15, value: 6 },
  { name: 16, value: 1 },
  { name: 17, value: 9 },
  { name: 18, value: 8 },
];

const accountChartSlice = createSlice({
  name: "accountChartSlice",
  initialState,
  reducers: {
    getNewAccountData(state) {
      const tempChartData = state.map((data) => ({
        ...data,
        value: Math.floor(Math.random() * chartMaxValue) + 1,
      }));

      return tempChartData;
    },
  },
});

export const accountChartActions = accountChartSlice.actions;

export default accountChartSlice.reducer;
