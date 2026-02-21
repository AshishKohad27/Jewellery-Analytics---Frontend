"use client";

import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip
);

const goldColors = {
  primary: "#F59E0B",
  primaryLight: "#FDE68A",
  primaryDark: "#B45309",
  silver: "#94A3B8",
  diamond: "#3B82F6",
  emerald: "#10B981",
};

const salesData = {
  "7": {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [2.4, 3.1, 2.8, 3.5, 4.2, 5.8, 4.1],
  },
  "30": {
    labels: [
      "Week 1", "Week 2", "Week 3", "Week 4",
      "Day 29", "Day 30",
    ],
    data: [18.5, 22.3, 19.8, 24.1, 4.5, 3.9],
  },
  "90": {
    labels: ["Jan", "Feb", "Mar"],
    data: [68.2, 75.4, 82.1],
  },
};

export function SalesTrendSection() {
  const [period, setPeriod] = useState("30");

  const current = salesData[period];

  const data = {
    labels: current.labels,
    datasets: [
      {
        label: "Sales (₹ Lakhs)",
        data: current.data,
        borderColor: goldColors.primary,
        backgroundColor: "rgba(245, 158, 11, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: goldColors.primary,
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1E293B",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => "₹" + context.parsed.y + " Lakhs",
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748B" },
      },
      y: {
        grid: { color: "#E2E8F0" },
        ticks: {
          color: "#64748B",
          callback: (value) => "₹" + value + "L",
        },
      },
    },
  };

  return (
    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Sales Trend</h3>
          <p className="text-sm text-slate-500">
            Last {period} days performance
          </p>
        </div>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="text-sm border border-slate-200 rounded-lg px-3 py-2 text-slate-600 focus:outline-none focus:ring-2 focus:ring-gold-500"
        >
          <option value="30">Last 30 days</option>
          <option value="7">Last 7 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </div>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export function CategoryChart() {
  const data = {
    labels: ["Gold", "Silver", "Diamond"],
    datasets: [
      {
        data: [65, 20, 15],
        backgroundColor: [
          goldColors.primary,
          goldColors.silver,
          goldColors.diamond,
        ],
        borderColor: ["#fff", "#fff", "#fff"],
        borderWidth: 3,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "65%",
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1E293B",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        callbacks: {
          label: (context) => context.label + ": " + context.parsed + "%",
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
