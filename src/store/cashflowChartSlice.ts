import { createSlice } from "@reduxjs/toolkit";
import { ChartMultipleValueType } from "../utils/customTypes";
import { chartMaxValue } from "../utils/constant";

const initialState: ChartMultipleValueType<string>[] = [
  { name: "August", inValue: 5, outValue: 2 },
  { name: "September", inValue: 8, outValue: 6 },
  { name: "October", inValue: 9, outValue: 7 },
  { name: "November", inValue: 3, outValue: 1 },
  { name: "December", inValue: 2, outValue: 1 },
  { name: "January", inValue: 4, outValue: 3 },
];

const cashflowChartSlice = createSlice({
  name: "accountChartSlice",
  initialState,
  reducers: {
    getNewCashFlowData(state) {
      const tempChartData = state.map((data) => {
        const newInValue = Math.floor(Math.random() * chartMaxValue) + 1;

        return {
          ...data,
          inValue: newInValue,
          outValue: Math.floor(newInValue / 2),
        };
      });

      return tempChartData;
    },
  },
});

export const cashflowChartActions = cashflowChartSlice.actions;

export default cashflowChartSlice.reducer;
