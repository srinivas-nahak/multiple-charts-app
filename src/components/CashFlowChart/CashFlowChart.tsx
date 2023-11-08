import { useEffect, useRef } from "react";
import {
  chartHeight,
  chartPadding,
  chartWidth,
  dividerStyle,
} from "../../utils/constant";
import * as d3 from "d3";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  ListItemIcon,
  MenuItem,
  MenuList,
  ThemeProvider,
  Typography,
} from "@mui/material";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import { h6Theme } from "../../utils/fontSizeHelper";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const CashFlowChart = () => {
  const cashflowChartData = useSelector(
    (state: RootState) => state.cashflowChartReducer
  );

  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    //Defining Scales
    const xScale = d3
      .scaleBand()
      .domain(cashflowChartData.map((data) => data.name))
      .range([chartPadding, chartWidth - chartPadding])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .nice()
      .domain([0, d3.max(cashflowChartData, (data) => data.inValue)!])
      .range([chartHeight - chartPadding, chartPadding]);

    //Drawing bars
    d3.selectAll(".cashflow-outer-bars").remove();
    d3.selectAll(".cashflow-inner-bars").remove();

    d3.select(svgRef.current)
      .selectAll(".cashflow-outer-bars")
      .data(cashflowChartData)
      .enter()
      .append("rect")
      .attr("class", "cashflow-outer-bars")
      .attr("x", (data) => xScale(data.name)! + chartPadding / 2)
      .attr("y", (data) => yScale(data.inValue))
      .attr("width", xScale.bandwidth() - chartPadding)
      .attr("height", (data) => yScale(0) - yScale(data.inValue))
      .attr("fill", "#4b9435")
      .attr("rx", 5);

    d3.select(svgRef.current)
      .selectAll(".cashflow-inner-bars")
      .data(cashflowChartData)
      .enter()
      .append("rect")
      .attr("class", "cashflow-inner-bars")
      .attr("x", (data) => xScale(data.name)! + chartPadding / 2)
      .attr("y", (data) => yScale(data.outValue))
      .attr("width", xScale.bandwidth() - chartPadding)
      .attr("height", (data) => yScale(0) - yScale(data.outValue))
      .attr("fill", "#63b948")
      .attr("rx", 5);

    //Drawing axis
    const xAxis = d3.axisBottom(xScale);

    d3.select("#x-axis-cashflow").remove();
    d3.select(svgRef.current)
      .append("g")
      .attr("id", "x-axis-invoice")
      .attr("transform", `translate(0,${chartHeight - chartPadding})`)
      .call(xAxis);
  }, [cashflowChartData]);

  return (
    <Card elevation={0} sx={{ borderRadius: "1.5rem" }}>
      <CardHeader
        action={
          <MenuList
            sx={{
              display: "flex",
              pointerEvents: "none",
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <SquareRoundedIcon sx={{ color: "#4b9435" }} />
              </ListItemIcon>
              <Typography variant="subtitle2">In</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SquareRoundedIcon sx={{ color: "#63b948" }} />
              </ListItemIcon>
              <Typography variant="subtitle2">Out</Typography>
            </MenuItem>
          </MenuList>
        }
        title={
          <ThemeProvider theme={h6Theme}>
            <Typography variant="h6">Total Cash Flow</Typography>
          </ThemeProvider>
        }
        sx={{ flex: 1, height: "2.8rem", alignItems: "center" }}
      />
      <Divider sx={dividerStyle} />
      <CardContent>
        <svg ref={svgRef} viewBox={`0 0 ${chartWidth} ${chartHeight}`} />
      </CardContent>
    </Card>
  );
};

export default CashFlowChart;
