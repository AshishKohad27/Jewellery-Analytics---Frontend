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

const inrFormat = (n) => "₹" + Number(n).toLocaleString("en-IN");

const inrCompact = (n) => {
  const v = Number(n) || 0;
  if (Math.abs(v) >= 10000000) return "₹" + (v / 10000000).toFixed(1) + "Cr";
  if (Math.abs(v) >= 100000) return "₹" + (v / 100000).toFixed(1) + "L";
  if (Math.abs(v) >= 1000) return "₹" + (v / 1000).toFixed(1) + "K";
  return "₹" + v;
};

export function CategoryRevenueChart({ categories }) {
  const list = Array.isArray(categories) ? categories : defaultCategoryRevenue;

  const labels = list.map((c) => c.name);
  const values = list.map((c) => Number(c.revenue) || 0);

  const data = {
    labels,
    datasets: [
      {
        label: "Revenue (₹)",
        data: values,
        backgroundColor: "#F5B544",
        borderRadius: 6,
        borderSkipped: false,
        categoryPercentage: 0.7,
        barPercentage: 0.85,
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
        callbacks: {
          label: (ctx) => " Revenue: " + inrFormat(ctx.parsed.y),
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748B", font: { size: 12 } },
      },
      y: {
        beginAtZero: true,
        grid: { color: "#E2E8F0" },
        ticks: {
          color: "#64748B",
          callback: (value) => inrCompact(value),
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export function CategorySalesPieChart({ categories }) {
  const list = Array.isArray(categories) ? categories : defaultCategoryRevenue;

  const labels = list.map((c) => c.name);
  const values = list.map((c) => Number(c.revenue) || 0);
  const colors = generateColorsCharts(list.length);

  const total = values.reduce((sum, v) => sum + v, 0) || 1;

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
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
            const pct = ((ctx.parsed / total) * 100).toFixed(1);
            return ` ${ctx.label}: ${inrCompact(ctx.parsed)} (${pct}%)`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export function PriceRangeChart({ buckets }) {
  const list = Array.isArray(buckets) ? buckets : defaultPriceBuckets;

  const labels = list.map((b) => b.label);
  const values = list.map((b) => Number(b.count) || 0);

  const data = {
    labels,
    datasets: [
      {
        label: "Products",
        data: values,
        backgroundColor: "#7BA8F0",
        borderRadius: 6,
        borderSkipped: false,
        categoryPercentage: 0.7,
        barPercentage: 0.85,
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
        callbacks: {
          label: (ctx) => ` ${ctx.parsed.y} products`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748B", font: { size: 12 } },
      },
      y: {
        beginAtZero: true,
        grid: { color: "#E2E8F0" },
        ticks: { color: "#64748B", precision: 0 },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export function MonthlyCategoryTrendChart({ months, series }) {
  const monthsList =
    Array.isArray(months) && months.length ? months : defaultTrendMonths;
  const seriesList =
    Array.isArray(series) && series.length ? series : defaultTrendSeries;

  const colors = generateColorsCharts(seriesList.length);

  const data = {
    labels: monthsList,
    datasets: seriesList.map((s, i) => ({
      label: s.name,
      data: s.values,
      borderColor: colors[i],
      backgroundColor: colors[i] + "20",
      borderWidth: 2.5,
      tension: 0.4,
      fill: false,
      pointBackgroundColor: colors[i],
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 3,
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
          label: (ctx) => ` ${ctx.dataset.label}: ${inrCompact(ctx.parsed.y)}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748B" },
      },
      y: {
        beginAtZero: true,
        grid: { color: "#E2E8F0" },
        ticks: {
          color: "#64748B",
          callback: (value) => inrCompact(value),
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

const defaultCategoryRevenue = [
  { name: "Necklaces", revenue: 4584000 },
  { name: "Rings", revenue: 3192000 },
  { name: "Earrings", revenue: 2436000 },
  { name: "Bangles", revenue: 2178000 },
  { name: "Chains", revenue: 1745000 },
  { name: "Pendants", revenue: 1320000 },
  { name: "Bracelets", revenue: 1062000 },
  { name: "Anklets", revenue: 861000 },
];

const defaultPriceBuckets = [
  { label: "< ₹10K", count: 32 },
  { label: "₹10K – ₹25K", count: 58 },
  { label: "₹25K – ₹50K", count: 64 },
  { label: "₹50K – ₹1L", count: 47 },
  { label: "₹1L – ₹2.5L", count: 28 },
  { label: "₹2.5L – ₹5L", count: 14 },
  { label: "> ₹5L", count: 5 },
];

const defaultTrendMonths = [
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
];

const defaultTrendSeries = [
  {
    name: "Necklaces",
    values: [
      320000, 360000, 410000, 380000, 450000, 520000, 610000, 480000, 420000,
      390000, 410000, 440000,
    ],
  },
  {
    name: "Rings",
    values: [
      210000, 245000, 270000, 260000, 310000, 360000, 420000, 330000, 295000,
      280000, 295000, 315000,
    ],
  },
  {
    name: "Earrings",
    values: [
      180000, 200000, 215000, 205000, 235000, 270000, 310000, 250000, 225000,
      215000, 225000, 240000,
    ],
  },
  {
    name: "Bangles",
    values: [
      160000, 175000, 190000, 185000, 210000, 240000, 280000, 225000, 200000,
      190000, 200000, 215000,
    ],
  },
  {
    name: "Chains",
    values: [
      130000, 145000, 158000, 152000, 175000, 200000, 235000, 188000, 168000,
      160000, 168000, 180000,
    ],
  },
];
