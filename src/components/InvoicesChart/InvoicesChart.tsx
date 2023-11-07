import { useEffect, useRef, useState } from "react";
import { ChartSingleValueType } from "../../utils/customTypes";
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

const InvoicesChart = () => {
  const initialInvoicesData: ChartSingleValueType<string>[] = [
    { name: "older", value: 5 },
    { name: "Jan 01-08", value: 8 },
    { name: "Jan 09-16", value: 9 },
    { name: "Jan 17-24", value: 3 },
    { name: "Jan 25-31", value: 2 },
    { name: "Future", value: 4 },
  ];

  const [invoiceChartData, setInvoiceChartData] = useState(initialInvoicesData);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    //Defining Scales
    const xScale = d3
      .scaleBand()
      .domain(invoiceChartData.map((data) => data.name))
      .range([chartPadding, chartWidth - chartPadding])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .nice()
      .domain([0, d3.max(invoiceChartData, (data) => data.value)!])
      .range([chartHeight - chartPadding, chartPadding]);

    //Drawing bars
    d3.select(".invoice-bars").remove();
    d3.select(svgRef.current)
      .selectAll(".invoice-bars")
      .data(invoiceChartData)
      .enter()
      .append("rect")
      .attr("x", (data) => xScale(data.name)! + chartPadding / 2)
      .attr("y", (data) => yScale(data.value))
      .attr("width", xScale.bandwidth() - chartPadding)
      .attr("height", (data) => yScale(0) - yScale(data.value))
      .attr("rx", 5);

    //Drawing axis
    const xAxis = d3.axisBottom(xScale);

    d3.select("#x-axis-invoice").remove();
    d3.select(svgRef.current)
      .append("g")
      .attr("id", "x-axis-invoice")
      .attr("transform", `translate(0,${chartHeight - chartPadding})`)
      .call(xAxis);
  }, [invoiceChartData]);

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
        title={<Typography variant="h6">Invoices owned to you</Typography>}
        sx={{ flex: 1, height: "2.8rem", alignItems: "center" }}
      />
      <Divider sx={dividerStyle} />
      <CardContent>
        <svg ref={svgRef} viewBox={`0 0 ${chartWidth} ${chartHeight}`} />
      </CardContent>
    </Card>
  );
};

export default InvoicesChart;
