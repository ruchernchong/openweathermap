import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js";

const WeatherChart = ({ datasets, labels, title, type }) => {
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
          callbacks: {
            footer: (tooltipItems, data) => {
              let description = "";

              tooltipItems.forEach(({ datasetIndex, index }) => {
                description = data.datasets[datasetIndex]?.description[index];
              });

              return description;
            }
          },
          mode: "index",
          intersect: false
        }
      }
    });
  }, [chartRef, datasets, labels, title, type]);

  return <canvas ref={chartRef} />;
};

WeatherChart.defaultProps = {
  type: "line"
};

WeatherChart.propTypes = {
  /** The datasets for the chart */
  datasets: PropTypes.array.isRequired,
  /** The X-Axis */
  labels: PropTypes.array.isRequired,
  /** The title of the chart */
  title: PropTypes.shape({
    display: PropTypes.bool,
    text: PropTypes.string
  }),
  /** The type of chart - Available types are from Chart.js */
  type: PropTypes.oneOf(["line", "bar", "radar", "pie", "bubble", "scatter"])
};

export default WeatherChart;