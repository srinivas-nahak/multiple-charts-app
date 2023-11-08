import { useEffect, useRef } from "react";
import {
  chartBarPadding,
  chartHeight,
  chartPadding,
  chartSpacer,
  chartWidth,
  dividerStyle,
} from "../../utils/constant";
import * as d3 from "d3";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import NewSalesInvoiceDialog from "../NewSalesInvoiceDialog";
import "../../styles/chartBarStyle.css";

const InvoicesChart = () => {
  const invoiceChartData = useSelector(
    (state: RootState) => state.invoiceChartReducer
  );

  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    //Defining Scales
    const xScale = d3
      .scaleBand()
      .domain(invoiceChartData.map((data) => data.name))
      .range([chartPadding, chartSpacer * 2 + chartWidth - chartPadding])
      .padding(chartBarPadding);

    const yScale = d3
      .scaleLinear()
      .nice()
      .domain([0, d3.max(invoiceChartData, (data) => data.value)!])
      .range([chartHeight - chartPadding, chartPadding]);

    //Drawing bars
    d3.selectAll(".invoice-bars").remove();
    d3.select(svgRef.current)
      .selectAll(".invoice-bars")
      .data(invoiceChartData)
      .enter()
      .append("rect")
      .attr("class", "invoice-bars")
      .attr("x", (data) => xScale(data.name)! + chartPadding / 2 - chartSpacer)
      .attr("y", (data) => yScale(data.value))
      .attr("width", xScale.bandwidth() - chartPadding)
      .attr("height", (data) => yScale(0) - yScale(data.value))
      .attr("fill", "#63b948")
      .attr("rx", 5);

    //Drawing axis
    const xAxis = d3.axisBottom(xScale);

    d3.select("#x-axis-invoice").remove();
    d3.select(svgRef.current)
      .append("g")
      .attr("id", "x-axis-invoice")
      .attr(
        "transform",
        `translate(${-chartSpacer},${chartHeight - chartPadding})`
      )
      .call(xAxis);
  }, [invoiceChartData]);

  return (
    <Card elevation={0} sx={{ borderRadius: "1.5rem" }}>
      <CardHeader
        action={<NewSalesInvoiceDialog />}
        title={<Typography variant="h6">Invoices owned to you</Typography>}
        sx={{
          height: "2.8rem",
          display: "flex",
        }}
      />
      <Divider sx={dividerStyle} />
      <CardContent>
        <svg ref={svgRef} viewBox={`0 0 ${chartWidth} ${chartHeight}`} />
      </CardContent>
    </Card>
  );
};

export default InvoicesChart;
