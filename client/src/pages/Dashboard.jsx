import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar.jsx";
import StatCard from "../components/StateCard.jsx";
import Suggestions from "../components/Suggestions.jsx";
import axios from "axios";
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

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [stats, setStats] = useState({
    avgSleep: 0,
    avgWorkout: 0,
    mealCount: 0,
  });

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/stats");
        setStats(res.data);

        setChartData({
          labels: ["Sleep", "Workout", "Meals"],
          datasets: [
            {
              label: "Daily Health Stats",
              data: [res.data.avgSleep, res.data.avgWorkout, res.data.mealCount],
              borderColor: "#3e8e41",
              backgroundColor: "rgba(62, 142, 65, 0.2)",
              tension: 0.4,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching stats:", error);

        // fallback empty chart
        setChartData({
          labels: ["Sleep", "Workout", "Meals"],
          datasets: [],
        });
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        <h2 className="text-3xl font-bold text-[#3e8e41] text-center">
          Today’s Health Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <StatCard
            title="Sleep Hours"
            value={`${stats.avgSleep.toFixed(1)} hrs`}
            changeText="Last 7 Days +5%"
          >
            <div className="h-20 bg-green-50 rounded-lg flex items-center justify-center text-sm text-[#3e8e41] font-medium">
              Good Rest!
            </div>
          </StatCard>

          <StatCard
            title="Workout Duration"
            value={`${stats.avgWorkout.toFixed(1)} mins`}
            changeText="Last 7 Days -2%"
          >
            <div className="h-20 bg-green-50 rounded-lg flex items-center justify-center text-sm text-[#3e8e41] font-medium">
              Keep Moving!
            </div>
          </StatCard>

          <StatCard
            title="Meal Count"
            value={`${stats.mealCount} meals`}
            changeText="Last 7 Days +10%"
          >
            <div className="h-20 bg-green-50 rounded-lg flex items-center justify-center text-sm text-[#3e8e41] font-medium">
              Well Balanced!
            </div>
          </StatCard>
        </div>

        {/* Health Stats Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md mt-8">
          <h3 className="text-xl font-bold text-[#3e8e41] text-center mb-4">
            Health Stats Over Time
          </h3>

          {chartData.datasets.length > 0 ? (
            <Line
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Daily Health Log",
                  },
                  tooltip: {
                    enabled: true,
                  },
                },
              }}
            />
          ) : (
            <p className="text-center text-gray-500">Loading chart data…</p>
          )}
        </div>

        <Suggestions />
      </div>
    </div>
  );
};

export default Dashboard;
