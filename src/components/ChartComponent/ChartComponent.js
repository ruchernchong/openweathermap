import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js";

const ChartComponent = ({ datasets, labels, title, type }) => {
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
                description = data.datasets[datasetIndex].description[index];
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

  return (
    <div style={{ width: `100%`, height: `100%` }}>
      <canvas ref={chartRef} />
    </div>
  );
};

ChartComponent.defaultProps = {
  type: "line"
};

ChartComponent.propTypes = {
  /** The datasets for the chart */
  datasets: PropTypes.array,
  /** The height of the canvas */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The X-Axis */
  labels: PropTypes.array,
  /** The title of the chart */
  title: PropTypes.shape({
    display: PropTypes.bool,
    text: PropTypes.string
  }),
  /** The type of chart - Available types are from Chart.js */
  type: PropTypes.oneOf(["line", "bar", "radar", "pie", "bubble", "scatter"]),
  /** The width of the canvas */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChartComponent;
