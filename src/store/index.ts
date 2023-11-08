import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountChartReducer from "./accountChartSlice";
import invoiceChartReducer from "./invoicesChartSlice";
import cashflowChartReducer from "./cashflowChartSlice";
import accountWatchReducer from "./accountWatchSlice";

const allReducers = combineReducers({
  accountChartReducer,
  invoiceChartReducer,
  cashflowChartReducer,
  accountWatchReducer,
});

const store = configureStore({ reducer: allReducers });

export type RootState = ReturnType<typeof allReducers>;

export default store;
