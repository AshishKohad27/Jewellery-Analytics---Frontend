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
import { Bar, Doughnut } from "react-chartjs-2";

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

export function ItemsPerSupplierChart({ suppliers }) {
  const list =
    Array.isArray(suppliers) && suppliers.length ? suppliers : defaultSuppliers;

  const labels = list.map((s) => s.supplier_name);
  const itemCounts = list.map((s) => Number(s.item_count) || 0);
  const itemValues = list.map((s) => Number(s.total_cost_value) || 0);

  const data = {
    labels,
    datasets: [
      {
        label: "Items",
        data: itemCounts,
        backgroundColor: "#7BA8F0",
        borderRadius: 6,
        borderSkipped: false,
        yAxisID: "y",
        categoryPercentage: 0.7,
        barPercentage: 0.9,
      },
      {
        label: "Value (₹)",
        data: itemValues,
        backgroundColor: "#F5B544",
        borderRadius: 6,
        borderSkipped: false,
        yAxisID: "y1",
        categoryPercentage: 0.7,
        barPercentage: 0.9,
      },
    ],
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
          boxHeight: 12,
          padding: 14,
          usePointStyle: true,
          font: { size: 12 },
        },
      },
      tooltip: {
        backgroundColor: "#1E293B",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        callbacks: {
          label: (ctx) =>
            ctx.dataset.yAxisID === "y1"
              ? " Value: " + inrCompact(ctx.parsed.y)
              : " Items: " + ctx.parsed.y,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748B", font: { size: 11 } },
      },
      y: {
        position: "left",
        beginAtZero: true,
        grid: { color: "#E2E8F0" },
        ticks: { color: "#64748B", precision: 0 },
        title: {
          display: true,
          text: "Items",
          color: "#94A3B8",
          font: { size: 11 },
        },
      },
      y1: {
        position: "right",
        beginAtZero: true,
        grid: { display: false },
        ticks: {
          color: "#64748B",
          callback: (value) => inrCompact(value),
        },
        title: {
          display: true,
          text: "Value",
          color: "#94A3B8",
          font: { size: 11 },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export function RevenueContributionChart({ suppliers }) {
  const list =
    Array.isArray(suppliers) && suppliers.length ? suppliers : defaultSuppliers;

  const labels = list.map((s) => s.supplier_name);

  const values = list.map((s) => Number(s.total_revenue) || 0);

  // percentage from backend
  const percentages = list.map((s) => Number(s.revenue_percentage) || 0);

  const colors = generateColorsCharts(list.length);

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
            const pct = percentages[ctx.dataIndex];

            return ` ${ctx.label}: ${inrCompact(ctx.parsed)} (${pct}%)`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

// export function CategoryDistributionChart({ suppliers, categories }) {
//   const supplierList =
//     Array.isArray(suppliers) && suppliers.length ? suppliers : defaultSuppliers;
//   const categoryList =
//     Array.isArray(categories) && categories.length
//       ? categories
//       : defaultCategoryDistribution;

//   const colors = generateColorsCharts(categoryList.length);

//   const datasets = categoryList.map((cat, i) => ({
//     label: cat.name,
//     data: supplierList.map((s) => Number(cat.bySupplier?.[s.name]) || 0),
//     backgroundColor: colors[i],
//     borderRadius: 4,
//     borderSkipped: false,
//     stack: "categories",
//   }));

//   const data = {
//     labels: supplierList.map((s) => s.name),
//     datasets,
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     interaction: { mode: "index", intersect: false },
//     plugins: {
//       legend: {
//         position: "top",
//         align: "end",
//         labels: {
//           color: "#475569",
//           boxWidth: 12,
//           padding: 12,
//           usePointStyle: true,
//           font: { size: 11 },
//         },
//       },
//       tooltip: {
//         backgroundColor: "#1E293B",
//         titleColor: "#fff",
//         bodyColor: "#fff",
//         padding: 12,
//         callbacks: {
//           label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y} items`,
//         },
//       },
//     },
//     scales: {
//       x: {
//         stacked: true,
//         grid: { display: false },
//         ticks: { color: "#64748B", font: { size: 11 } },
//       },
//       y: {
//         stacked: true,
//         beginAtZero: true,
//         grid: { color: "#E2E8F0" },
//         ticks: { color: "#64748B", precision: 0 },
//       },
//     },
//   };

//   return <Bar data={data} options={options} />;
// }

export function CategoryDistributionChart({ data = [] }) {
  // unique suppliers
  const suppliers = [...new Set(data.map((d) => d.supplier_name))];

  // unique categories
  const categories = [...new Set(data.map((d) => d.category_name))];

  const colors = generateColorsCharts(categories.length);

  // build datasets
  const datasets = categories.map((category, i) => ({
    label: category,

    data: suppliers.map((supplier) => {
      const found = data.find(
        (d) =>
          d.supplier_name === supplier &&
          d.category_name === category
      );

      return found?.item_count || 0;
    }),

    backgroundColor: colors[i],
    borderRadius: 4,
    borderSkipped: false,
    stack: "categories",
  }));

  const chartData = {
    labels: suppliers,
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
      mode: "index",
      intersect: false,
    },

    plugins: {
      legend: {
        position: "top",
        align: "end",

        labels: {
          color: "#475569",
          boxWidth: 12,
          padding: 12,
          usePointStyle: true,
          font: { size: 11 },
        },
      },

      tooltip: {
        backgroundColor: "#1E293B",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,

        callbacks: {
          label: (ctx) =>
            ` ${ctx.dataset.label}: ${ctx.parsed.y} items`,
        },
      },
    },

    scales: {
      x: {
        stacked: true,
        grid: { display: false },

        ticks: {
          color: "#64748B",
          font: { size: 11 },
        },
      },

      y: {
        stacked: true,
        beginAtZero: true,

        grid: {
          color: "#E2E8F0",
        },

        ticks: {
          color: "#64748B",
          precision: 0,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}

export function CostVsSellingChart({ suppliers }) {
  const list =
    Array.isArray(suppliers) && suppliers.length ? suppliers : defaultSuppliers;

  const labels = list.map((s) => s.supplier_name);
  const cost = list.map((s) => Number(s.avg_cost_value) || 0);
  const selling = list.map((s) => Number(s.avg_selling_value) || 0);
  const margin = list.map((s) => Number(s.avg_margin) || 0);

  const data = {
    labels,
    datasets: [
      {
        label: "Avg Cost",
        data: cost,
        backgroundColor: "#7BA8F0",
        borderRadius: 4,
        borderSkipped: false,
        categoryPercentage: 0.75,
        barPercentage: 0.9,
      },
      {
        label: "Avg Selling",
        data: selling,
        backgroundColor: "#F5B544",
        borderRadius: 4,
        borderSkipped: false,
        categoryPercentage: 0.75,
        barPercentage: 0.9,
      },
      {
        label: "Avg Margin",
        data: margin,
        backgroundColor: "#34D399",
        borderRadius: 4,
        borderSkipped: false,
        categoryPercentage: 0.75,
        barPercentage: 0.9,
      },
    ],
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
          font: { size: 12 },
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
        ticks: { color: "#64748B", font: { size: 11 } },
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

const defaultSuppliers = [
  {
    name: "Tanishq",
    items: 85,
    value: 3625000,
    revenue: 2452800,
    avgCost: 38500,
    avgSelling: 42750,
    avgMargin: 4250,
  },
  {
    name: "Kalyan Gold",
    items: 72,
    value: 2920000,
    revenue: 1875400,
    avgCost: 36200,
    avgSelling: 40000,
    avgMargin: 3800,
  },
  {
    name: "Malabar",
    items: 68,
    value: 2480000,
    revenue: 1532600,
    avgCost: 32800,
    avgSelling: 36300,
    avgMargin: 3500,
  },
  {
    name: "PC Jeweller",
    items: 62,
    value: 1985000,
    revenue: 1248200,
    avgCost: 28500,
    avgSelling: 31450,
    avgMargin: 2950,
  },
  {
    name: "Senco Gold",
    items: 61,
    value: 1742000,
    revenue: 1094500,
    avgCost: 25400,
    avgSelling: 28050,
    avgMargin: 2650,
  },
];

const defaultCategoryDistribution = [
  {
    name: "Necklaces",
    bySupplier: {
      Tanishq: 22,
      "Kalyan Gold": 18,
      Malabar: 16,
      "PC Jeweller": 14,
      "Senco Gold": 12,
    },
  },
  {
    name: "Rings",
    bySupplier: {
      Tanishq: 18,
      "Kalyan Gold": 16,
      Malabar: 14,
      "PC Jeweller": 13,
      "Senco Gold": 11,
    },
  },
  {
    name: "Earrings",
    bySupplier: {
      Tanishq: 15,
      "Kalyan Gold": 13,
      Malabar: 12,
      "PC Jeweller": 11,
      "Senco Gold": 10,
    },
  },
  {
    name: "Bangles",
    bySupplier: {
      Tanishq: 14,
      "Kalyan Gold": 12,
      Malabar: 11,
      "PC Jeweller": 10,
      "Senco Gold": 10,
    },
  },
  {
    name: "Chains",
    bySupplier: {
      Tanishq: 9,
      "Kalyan Gold": 8,
      Malabar: 8,
      "PC Jeweller": 7,
      "Senco Gold": 9,
    },
  },
  {
    name: "Pendants",
    bySupplier: {
      Tanishq: 7,
      "Kalyan Gold": 5,
      Malabar: 7,
      "PC Jeweller": 7,
      "Senco Gold": 9,
    },
  },
];
