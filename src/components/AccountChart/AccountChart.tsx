import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Button } from "@mui/base";
import "../../styles/chartBarStyle.css";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import {
  chartHeight,
  chartMaxValue,
  chartPadding,
  chartWidth,
  dividerStyle,
} from "../../utils/constant";
import { ChartSingleValueType } from "../../utils/customTypes";

const AccountChart = () => {
  const initialAccountChartData: ChartSingleValueType<number>[] = [
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

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [accountChartData, setAccountChartData] = useState(
    initialAccountChartData
  );

  const [monthOption, setMonthOption] = useState(0);
  const [manageOption, setManageOption] = useState(0);

  const svgRef = useRef<SVGSVGElement | null>(null);

  const changeHandler = () => {
    setAccountChartData((currentData) => {
      return currentData.map((data) => {
        data.value = Math.floor(Math.random() * chartMaxValue) + 1;
        return data;
      });
    });
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
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
            <MenuItem value={0}>Manage</MenuItem>
            <MenuItem value={1}>Edit</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            id="month-options"
            name="month-options"
            value={monthOption.toString()}
            onChange={optionChangeHandler}
            displayEmpty
            inputProps={{ "aria-label": "Month Options" }}
            sx={{ borderRadius: "0.8rem" }}
          >
            {months.map((month, index) => (
              <MenuItem value={index} key={index}>
                {month}
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
        title={<Typography variant="h6">Checking Account</Typography>}
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
