import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

interface WeatherChartProps {
  datasets: object[];
  isDailyForecast: boolean;
  labels: string[];
  title: {
    display: boolean;
    text: string;
  };
  type?: "line" | "bar" | "radar" | "pie" | "bubble" | "scatter";
}

export const WeatherChart = ({
  datasets,
  isDailyForecast,
  labels,
  title,
  type = "line"
}: WeatherChartProps) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = new Chart(chartRef?.current, {
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
                description =
                  data.datasets?.[datasetIndex]?.description?.[index];
              });

              return description;
            }
          },
          mode: "index",
          intersect: false
        }
      }
    });

    return () => {
      chartInstance.destroy();
    };
  }, [chartRef, datasets, isDailyForecast, labels, title, type]);

  return <canvas ref={chartRef} />;
};
