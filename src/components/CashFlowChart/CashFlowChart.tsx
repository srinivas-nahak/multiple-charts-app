import { useEffect, useRef, useState } from "react";
import {
  ChartMultipleValueType,
  ChartSingleValueType,
} from "../../utils/customTypes";
import {
  chartHeight,
  chartPadding,
  chartWidth,
  dividerStyle,
} from "../../utils/constant";
import * as d3 from "d3";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const CashFlowChart = () => {
  const initialCashFlowData: ChartMultipleValueType<string>[] = [
    { name: "August", inValue: 5, outValue: 2 },
    { name: "September", inValue: 8, outValue: 6 },
    { name: "October", inValue: 9, outValue: 7 },
    { name: "November", inValue: 3, outValue: 1 },
    { name: "December", inValue: 2, outValue: 1 },
    { name: "January", inValue: 4, outValue: 3 },
  ];

  const [cashflowChartData, setCashflowChartData] =
    useState(initialCashFlowData);
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
    d3.select(".cashflow-outer-bars").remove();
    d3.select(svgRef.current)
      .selectAll(".cashflow-outer-bars")
      .data(cashflowChartData)
      .enter()
      .append("rect")
      .attr("x", (data) => xScale(data.name)! + chartPadding / 2)
      .attr("y", (data) => yScale(data.inValue))
      .attr("width", xScale.bandwidth() - chartPadding)
      .attr("height", (data) => yScale(0) - yScale(data.inValue))
      .attr("fill", "blue")
      .attr("rx", 5);

    d3.select(".cashflow-inner-bars").remove();
    d3.select(svgRef.current)
      .selectAll(".cashflow-inner-bars")
      .data(cashflowChartData)
      .enter()
      .append("rect")
      .attr("x", (data) => xScale(data.name)! + chartPadding / 2)
      .attr("y", (data) => yScale(data.outValue))
      .attr("width", xScale.bandwidth() - chartPadding)
      .attr("height", (data) => yScale(0) - yScale(data.outValue))
      .attr("fill", "pink")
      .attr("rx", 5);

    //Drawing axis
    const xAxis = d3.axisBottom(xScale);

    d3.select("#x-axis-invoice").remove();
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
          <Stack alignItems="center" justifyContent="center" direction="column">
            <Button
              disableElevation
              size="small"
              sx={{
                alignSelf: "center",
                color: "#0089C0",
                backgroundColor: "#efeeee",
                borderRadius: "0.8rem",
                display: "flex",
              }}
            >
              New Sales Invoice
            </Button>
          </Stack>
        }
        title={<Typography variant="h6">Total Cash Flow</Typography>}
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
