import { createSlice } from "@reduxjs/toolkit";
import { ChartSingleValueType } from "../utils/customTypes";
import { chartMaxValue } from "../utils/constant";

const initialState: ChartSingleValueType<string>[] = [
  { name: "older", value: 5 },
  { name: "Jan 01-08", value: 8 },
  { name: "Jan 09-16", value: 9 },
  { name: "Jan 17-24", value: 3 },
  { name: "Jan 25-31", value: 2 },
  { name: "Future", value: 4 },
];

const invoiceChartSlice = createSlice({
  name: "accountChartSlice",
  initialState,
  reducers: {
    getNewInvoiceData(state) {
      const tempChartData = state.map((data) => ({
        ...data,
        value: Math.floor(Math.random() * chartMaxValue) + 1,
      }));

      return tempChartData;
    },
  },
});

export const invoiceChartActions = invoiceChartSlice.actions;

export default invoiceChartSlice.reducer;
