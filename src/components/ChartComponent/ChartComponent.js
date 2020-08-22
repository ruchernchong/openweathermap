import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js";

const ChartComponent = ({
  datasets = [],
  labels = [],
  title = {},
  type = "line"
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    new Chart(chartRef?.current, {
      type,
      data: {
        labels,
        datasets
      },
      options: {
        hover: {
          mode: "nearest",
          intersect: true
        },
        title,
        tooltips: {
          mode: "index",
          intersect: false
        }
      }
    });
  }, [chartRef, datasets, labels, title, type]);

  return <canvas width="400" height="400" ref={chartRef} />;
};

ChartComponent.propTypes = {
  /** The datasets for the chart */
  datasets: PropTypes.array,
  /** The X-Axis */
  labels: PropTypes.array,
  /** The title of the chart */
  title: PropTypes.shape({
    display: PropTypes.bool,
    text: PropTypes.string
  }),
  /** The type of chart - Available types are from Chart.js */
  type: PropTypes.oneOf(["line", "bar", "radar", "pie", "bubble", "scatter"])
};

export default ChartComponent;
