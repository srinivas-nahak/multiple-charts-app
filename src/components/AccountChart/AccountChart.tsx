import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "../../styles/chartBarStyle.css";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import {
  chartHeight,
  chartPadding,
  chartWidth,
  dividerStyle,
  monthNames,
} from "../../utils/constant";
import { ChartSingleValueType } from "../../utils/customTypes";
import { h6Theme } from "../../utils/fontSizeHelper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { accountChartActions } from "../../store/accountChartSlice";

const AccountChart = () => {
  const dispatch = useDispatch();
  const accountChartData = useSelector(
    (state: RootState) => state.accountChartReducer
  );

  const [monthOption, setMonthOption] = useState(0);
  const [manageOption, setManageOption] = useState(0);

  const svgRef = useRef<SVGSVGElement | null>(null);

  const changeHandler = () => {
    dispatch(accountChartActions.getNewAccountData());
  };

  const optionChangeHandler = (event: SelectChangeEvent) => {
    changeHandler();
    if (event.target.name === "manage-options") {
      return setManageOption(parseInt(event.target.value));
    }

    setMonthOption(parseInt(event.target.value));
  };

  //Plotting the chart
  useEffect(() => {
    //Defining scales
    const xScale = d3
      .scalePoint()
      .domain(accountChartData.map((data) => data.name.toString()))
      .range([chartPadding, chartWidth - chartPadding]);

    const yScale = d3
      .scaleLinear()
      .nice()
      .domain([0, d3.max(accountChartData, (data) => data.value) ?? 0])
      .range([chartHeight - chartPadding, chartPadding]);

    //Creating Line
    const line = d3
      .line<ChartSingleValueType<number>>()
      .x((data) => xScale(data.name.toString())!)
      .y((data) => yScale(data.value))
      .curve(d3.curveBundle);

    //Defining axes
    const xAxis = d3.axisBottom(xScale);

    //Plotting the Graph
    d3.select("#chart-curve").remove(); //Avoiding addition of multiple path
    d3.select(svgRef.current)
      .append("path")
      .attr("id", "chart-curve")
      .attr("class", "chart-main")
      .attr("d", () => line(accountChartData))
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", "2");

    //Plotting the Axis
    d3.select("#x-axis-account").remove(); //Avoiding addition of multiple g
    d3.select(svgRef.current)
      .append("g")
      .attr("id", "x-axis-account")
      .attr("transform", `translate(0,${chartHeight - chartPadding})`)
      .call(xAxis);
  }, [accountChartData]);

  const getActions = () => {
    return (
      <Stack direction="row">
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <Select
            id="manage-options"
            name="manage-options"
            value={manageOption.toString()}
            onChange={optionChangeHandler}
            displayEmpty
            inputProps={{
              "aria-label": "Manage Options",
            }}
            sx={{ borderRadius: "0.8rem" }}
          >
            <MenuItem value={0}>
              <Typography variant="subtitle2">Manage</Typography>
            </MenuItem>
            <MenuItem value={1}>
              <Typography variant="subtitle2">Edit</Typography>
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <Select
            id="month-options"
            name="month-options"
            value={monthOption.toString()}
            onChange={optionChangeHandler}
            displayEmpty
            inputProps={{ "aria-label": "Month Options" }}
            sx={{ borderRadius: "0.8rem" }}
          >
            {monthNames.map((month, index) => (
              <MenuItem value={index} key={index}>
                <Typography variant="subtitle2">{month}</Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    );
  };
  return (
    <Card elevation={0} sx={{ borderRadius: "1.5rem" }}>
      <CardHeader
        action={getActions()}
        title={
          <ThemeProvider theme={h6Theme}>
            <Typography variant="h6">Checking Account</Typography>
          </ThemeProvider>
        }
        sx={{ height: "2.8rem" }}
      />
      <Divider sx={dividerStyle} />
      <CardContent>
        <svg ref={svgRef} viewBox={`0 0 ${chartWidth} ${chartHeight}`} />
      </CardContent>
    </Card>
  );
};

export default AccountChart;
