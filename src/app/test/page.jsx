"use client";

// ==================== Imports ====================
// Redux
import { GetTestAction } from "@/redux/test/test.action";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/redux/test/test.slice";
import { useDispatch, useSelector } from "react-redux";

// React
import { useEffect, useMemo } from "react";

// Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

// Constants
import { getRoleColor, getRoleHex } from "@/constants/colorUtils/roleColors";

// ==================== Chart.js Registration ====================
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
);

// ==================== Component ====================
export default function Test() {
  // ---- Redux State ----
  const { value, loading, error, data, paramsData } = useSelector(
    (state) => state.test,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("data:", data);
  }, [loading]);
  // ---- Fetch Data on Mount ----
  useEffect(() => {
    dispatch(GetTestAction());
  }, [dispatch]);

  // ---- Compute Role Statistics from API Data ----
  const roleStats = useMemo(() => {
    if (!data || data.length === 0) return { labels: [], counts: [] };
    const countMap = {};
    data.forEach((user) => {
      const roleName = user.role?.name || "Unknown";
      countMap[roleName] = (countMap[roleName] || 0) + 1;
    });
    return {
      labels: Object.keys(countMap),
      counts: Object.values(countMap),
    };
  }, [data]);

  // ---- Doughnut Chart Config ----
  const doughnutData = {
    labels: roleStats.labels,
    datasets: [
      {
        data: roleStats.counts,
        backgroundColor: roleStats.labels.map(getRoleHex),
        borderColor: "#fff",
        borderWidth: 3,
        hoverOffset: 10,
      },
    ],
  };

  const doughnutOptions = {
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
          label: (ctx) => ctx.label + ": " + ctx.parsed + " users",
        },
      },
    },
  };

  // ---- Bar Chart Config ----
  const barData = {
    labels: roleStats.labels,
    datasets: [
      {
        label: "Users",
        data: roleStats.counts,
        backgroundColor: roleStats.labels.map(getRoleHex),
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1E293B",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#64748B" },
      },
      y: {
        grid: { color: "#E2E8F0" },
        ticks: { color: "#64748B", stepSize: 1 },
      },
    },
  };

  // ---- Loading State ----
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-slate-500 text-lg">Loading...</p>
      </div>
    );
  }

  // ---- Error State ----
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 text-lg">Failed to load data</p>
      </div>
    );
  }

  // ==================== Render ====================
  return (
    <div className="p-4 lg:p-8 space-y-8">
      {/* ---- Counter Controls ---- */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Counter Test
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-slate-800">{value}</span>
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
          >
            -
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
          >
            +
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200"
          >
            +5
          </button>
        </div>
      </div>

      {/* ---- Summary Cards ---- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-1">Total Users</p>
          <p className="text-2xl font-bold text-slate-800">
            {paramsData?.total?.items || data.length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-1">Total Pages</p>
          <p className="text-2xl font-bold text-slate-800">
            {paramsData?.total?.pages || 0}
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-1">Roles</p>
          <p className="text-2xl font-bold text-slate-800">
            {roleStats.labels.length}
          </p>
        </div>
      </div>

      {/* ---- Charts Section ---- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Doughnut Chart - Users by Role */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800">
              Users by Role
            </h3>
            <p className="text-sm text-slate-500">
              Distribution of users across roles
            </p>
          </div>
          <div className="h-64">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
          {/* Doughnut Legend */}
          <div className="mt-4 space-y-2">
            {roleStats.labels.map((label, i) => (
              <div key={label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getRoleHex(label) }}
                  />
                  <span className="text-sm text-slate-600">{label}</span>
                </div>
                <span className="text-sm font-medium text-slate-800">
                  {roleStats.counts[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Chart - User Count per Role */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800">
              User Count per Role
            </h3>
            <p className="text-sm text-slate-500">Bar chart breakdown</p>
          </div>
          <div className="h-64">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      </div>

      {/* ---- Users Table ---- */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800">Users</h3>
          <p className="text-sm text-slate-500">All fetched users from API</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                  Role
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-800">
                    {user.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {user.email}
                  </td>
                  {/* Role badge with global role colors */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role?.name).bg} ${getRoleColor(user.role?.name).text}`}
                    >
                      {user.role?.name}
                    </span>
                  </td>
                  {/* Status badge */}
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status ? "Active" : "Inactive"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
