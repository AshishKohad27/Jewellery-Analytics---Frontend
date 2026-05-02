"use client";

import { generateColorsCharts } from "@/constants/appConfig";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
);

const palette = {
  gold: "#F59E0B",
  goldLight: "#FDE68A",
  blue: "#3B82F6",
  purple: "#8B5CF6",
  emerald: "#10B981",
  orange: "#F97316",
  slate: "#64748B",
};

const staffColors = [
  palette.blue,
  palette.purple,
  palette.gold,
  palette.emerald,
  palette.orange,
];

const staffNames = [
  "Amit Sharma",
  "Priya Patel",
  "Rahul Verma",
  "Sneha Gupta",
  "Vikram Singh",
];

export function SalesByStaffChart({ sales }) {
  const list = Array.isArray(sales) ? sales : [];

  const staffLabels = list.map((staff) => staff?.name);
  const totalSales = list.map((staff) => Number(staff?.total_sales) || 0);
  const totalRevenue = list.map((staff) => Number(staff?.total_revenue) || 0);

  const data = {
    labels: staffLabels,
    datasets: [
      {
        label: "Total Revenue (₹)",
        data: totalRevenue,
        backgroundColor: "#F5B544",
        borderRadius: 4,
        borderSkipped: false,
        yAxisID: "y",
        categoryPercentage: 0.7,
        barPercentage: 0.9,
      },
      {
        label: "Total Sales (Count)",
        data: totalSales,
        backgroundColor: "#7BA8F0",
        borderRadius: 4,
        borderSkipped: false,
        yAxisID: "y1",
        categoryPercentage: 0.7,
        barPercentage: 0.9,
      },
    ],
  };

  const inrFormat = (n) => "₹" + Number(n).toLocaleString("en-IN");

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: {
        position: "top",
        align: "center",
        labels: {
          color: "#475569",
          boxWidth: 14,
          boxHeight: 14,
          padding: 18,
          usePointStyle: false,
          font: { size: 12 },
        },
      },
      tooltip: {
        backgroundColor: "#1E293B",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        callbacks: {
          label: (ctx) => {
            if (ctx.dataset.yAxisID === "y") {
              return " Revenue: " + inrFormat(ctx.parsed.y);
            }
            return " Sales: " + ctx.parsed.y;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748B", font: { size: 12 } },
      },
      y: {
        position: "left",
        beginAtZero: true,
        grid: { color: "#E2E8F0" },
        ticks: {
          color: "#64748B",
          callback: (value) => inrFormat(value),
        },
        title: {
          display: true,
          text: "Revenue (₹)",
          color: "#94A3B8",
          font: { size: 11 },
        },
      },
      y1: {
        position: "right",
        beginAtZero: true,
        grid: { display: false },
        ticks: { color: "#64748B", stepSize: 20 },
        title: {
          display: true,
          text: "Sales Count",
          color: "#94A3B8",
          font: { size: 11 },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export function StaffActivityTimelineChart({ activeTimeLines }) {
  const months = Object.keys(activeTimeLines);
  console.log("months: ", months);
  const staffSet = new Set();

  months.forEach((month) => {
    activeTimeLines[month]?.forEach((staff) => {
      staffSet.add(staff.staff_name);
    });
  });

  const staffLabels = Array.from(staffSet);
  console.log("staffLabels: ", staffLabels);

  // const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

  const seriesPerStaff = staffLabels.map((name) => {
    return months.map((month) => {
      const staff = activeTimeLines[month]?.find((s) => s.staff_name === name);

      return staff?.sales_count || 0; // or monthly_revenue
    });
  });

  const data = {
    labels: months,
    datasets: staffLabels.map((name, i) => ({
      label: name,
      data: seriesPerStaff[i],
      borderColor: generateColorsCharts(staffLabels.length)[i],
      backgroundColor: generateColorsCharts(staffLabels.length)[i] + "20",
      borderWidth: 2.5,
      tension: 0.4,
      fill: false,
      pointBackgroundColor: generateColorsCharts(staffLabels.length)[i],
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          color: "#475569",
          boxWidth: 12,
          padding: 14,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "#1E293B",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        callbacks: {
          label: (ctx) => ` ${ctx.dataset.label}: ₹${ctx.parsed.y}L`,
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

  return <Line data={data} options={options} />;
}

export function InventoryActionsPieChart({ staffs }) {
  const list = Array.isArray(staffs) ? staffs : [];

  const staffLabels = list.map((staff) => staff?.name);
  const staffData = list.map((staff) => Number(staff?.action_percentage) || 0);
  const staffActions = list.map((staff) => staff?.total_actions);
  const staffColorsResolved = generateColorsCharts(list.length);

  const data = {
    labels: staffLabels,
    datasets: [
      {
        data: staffData,
        backgroundColor: staffColorsResolved,
        borderColor: "#fff",
        borderWidth: 3,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#475569",
          boxWidth: 8,
          boxHeight: 8,
          padding: 14,
          usePointStyle: true,
          pointStyle: "circle",
          font: { size: 12 },
        },
      },
      tooltip: {
        backgroundColor: "#1E293B",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        displayColors: true,
        boxPadding: 4,
        callbacks: {
          title: (items) => items?.[0]?.label ?? "",
          label: (ctx) => {
            const pct = Number(ctx.parsed).toFixed(1);
            const actions = staffActions[ctx.dataIndex];
            return actions != null
              ? ` ${ctx.label}: ${actions} actions (${pct}%)`
              : ` ${ctx.label}: ${pct}%`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
