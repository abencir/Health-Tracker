import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HealthStatsChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-10 mx-auto max-w-4xl">
      <h3 className="text-xl font-bold text-[#3e8e41] text-center mb-6">
        Weekly Health Summary
      </h3>

      {data && data.datasets && data.datasets.length > 0 ? (
        <div className="w-full h-[300px]">
          <Line
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                  labels: {
                    color: "#444",
                  },
                },
                tooltip: {
                  backgroundColor: "#3e8e41",
                  titleColor: "#fff",
                  bodyColor: "#fff",
                },
              },
              scales: {
                x: {
                  ticks: { color: "#666" },
                  grid: { color: "#f0f0f0" },
                },
                y: {
                  ticks: { color: "#666" },
                  grid: { color: "#f0f0f0" },
                },
              },
            }}
          />
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading chart data…</p>
      )}
    </div>
  );
};

export default HealthStatsChart;