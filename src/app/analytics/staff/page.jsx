"use client";
import {
  SalesByStaffChart,
  StaffActivityTimelineChart,
  InventoryActionsPieChart,
} from "./StaffCharts";
import StatsCardsSkeleton from "@/components/skeleton/StatsCardsSkeleton";
import GoldCardSkeleton from "@/components/skeleton/GoldCardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  GetDiscountActionsByStaff,
  GetInventoryActionsByStaff,
  GetSalesByStaff,
  GetStaffActivityTimeline,
  GetStaffPerformance,
  GetStaffStats,
} from "@/redux/analytics/staff/staff.action";
import { useEffect } from "react";
import {
  formatCurrencyCompact,
  formatCurrencyWithComma,
  formatDateTime,
} from "@/constants/appConfig";
import { getRoleChip } from "@/constants/colorUtils/roleColors";
import { getStatusChip } from "@/constants/colorUtils/statusColor";

export default function StaffLayout() {
  const {
    loading,
    error,
    stats,
    performances,
    discounts,
    inventory,
    sales,
    activeTimeLines,
  } = useSelector((store) => store.analytics.staff);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetStaffStats());
    dispatch(GetSalesByStaff());
    dispatch(GetStaffActivityTimeline());
    dispatch(GetStaffPerformance());
    dispatch(GetDiscountActionsByStaff());
    dispatch(GetInventoryActionsByStaff());
  }, [dispatch]);

  useEffect(() => {
    console.log({
      loading,
      error,
      stats,
      performances,
      discounts,
      inventory,
      sales,
      activeTimeLines,
    });
  }, [loading, error, stats]);

  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-6 max-w-7xl mx-auto">
        {/* <!-- Page Header --> */}

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Staff Performance Analytics
          </h1>
          <p className="text-gray-500 mt-1">
            Track employee sales and activity metrics
          </p>
        </div>

        {/* <!-- KPI Cards --> */}
        {loading ? (
          <StatsCardsSkeleton cards={4} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* <!-- Total Active Staff --> */}
            <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats?.totalActiveStaff}
              </p>
              <p className="text-sm text-gray-500 mt-1">Total Active Staff</p>
            </div>

            {/* <!-- Top Performer --> */}
            <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gold-50 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs font-medium text-gold-600 bg-gold-50 px-2 py-1 rounded-full">
                  Top
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">
                {stats?.topPerformer?.name}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Top Performer (Revenue)
              </p>
              <p className="text-sm font-semibold text-gold-600 mt-0.5">
                {formatCurrencyCompact(stats?.topPerformer?.total_revenue)}
              </p>
            </div>

            {/* <!-- Avg Sales Per Staff --> */}
            <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                  Average
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {formatCurrencyCompact(stats?.avgSalesPerStaff)}
              </p>
              <p className="text-sm text-gray-500 mt-1">Avg Sales Per Staff</p>
            </div>

            {/* <!-- Most Transactions --> */}
            <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  {stats?.staffMostTransactions?.transactions} txns
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">
                {stats?.staffMostTransactions?.name}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Staff with Most Transactions
              </p>
            </div>
          </div>
        )}

        {/* <!-- Sales by Staff Bar Chart --> */}
        {loading ? (
          <GoldCardSkeleton variant="chart" />
        ) : (
          <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Sales by Staff Member
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Revenue and transaction count comparison across staff
            </p>
            <div className="h-80">
              <SalesByStaffChart sales={sales} />
            </div>
          </div>
        )}

        {/* <!-- Staff Activity Timeline --> */}
        {loading ? (
          <GoldCardSkeleton variant="chart" />
        ) : (
          <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Staff Activity Timeline
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Monthly sales performance trend by staff member
            </p>
            <div className="h-80">
              <StaffActivityTimelineChart activeTimeLines={activeTimeLines} />
            </div>
          </div>
        )}
        {/* <!-- Staff Performance Detailed Table --> */}
        {loading ? (
          <GoldCardSkeleton />
        ) : (
          <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Staff Performance Details
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Comprehensive breakdown of each staff members performance metrics
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gold-50 text-gold-800">
                    <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">Role</th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Total Sales
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Total Revenue
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Avg Order Value
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Largest Sale
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Discounts Given
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Unique Customers
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      Last Login
                    </th>
                    <th className="px-4 py-3 text-right font-semibold rounded-tr-lg">
                      Days Since Last Sale
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {performances?.map((performance) => (
                    <tr
                      key={performance?.id}
                      className="hover:bg-gold-50/50 transition"
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {performance?.name}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs ${getRoleChip(performance?.role)}`}
                        >
                          {performance?.role}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        {performance?.total_sales}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-900">
                        {formatCurrencyWithComma(performance?.total_revenue)}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        {formatCurrencyWithComma(performance?.avg_order_value)}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        {formatCurrencyWithComma(performance?.largest_sale)}
                      </td>
                      <td className="px-4 py-3 text-right text-red-600">
                        {formatCurrencyWithComma(
                          performance?.total_discounts_given,
                        )}
                      </td>
                      <td className="px-4 py-3 text-right text-gray-700">
                        {performance?.unique_customers}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {formatDateTime(performance?.last_login)}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span
                          className={`${
                            performance?.days_since_last_sale <= 3
                              ? getStatusChip("Completed")
                              : performance?.days_since_last_sale > 3 &&
                                  performance?.days_since_last_sale <= 6
                                ? getStatusChip("Pending")
                                : getStatusChip("Failed")
                          } px-2 py-0.5 rounded-full text-xs`}
                        >
                          {performance?.days_since_last_sale}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* <!-- Two Column: Inventory Actions Pie + Discount Analysis --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* <!-- Inventory Actions by Staff Pie --> */}
          {loading ? (
            <GoldCardSkeleton variant="chart" />
          ) : (
            <div className="h-full bg-white rounded-xl border border-gold-100 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Inventory Actions by Staff
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Distribution of inventory transactions handled by each staff
                member
              </p>
              <div className="h-98">
                <InventoryActionsPieChart staffs={inventory} />
              </div>
            </div>
          )}

          {/* <!-- Discount Analysis by Staff --> */}
          {loading ? (
            <GoldCardSkeleton />
          ) : (
            <div className="h-full bg-white rounded-xl border border-gold-100 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Discount Analysis by Staff
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Who gives the most discounts and at what rate
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gold-50 text-gold-800">
                      <th className="px-3 py-2.5 text-left font-semibold rounded-tl-lg">
                        Staff
                      </th>
                      <th className="px-3 py-2.5 text-right font-semibold">
                        Sales w/ Discount
                      </th>
                      <th className="px-3 py-2.5 text-right font-semibold">
                        Total Discount
                      </th>
                      <th className="px-3 py-2.5 text-right font-semibold">
                        Avg Discount
                      </th>
                      <th className="px-3 py-2.5 text-right font-semibold">
                        Max Discount
                      </th>
                      <th className="px-3 py-2.5 text-right font-semibold rounded-tr-lg">
                        Discount %
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {discounts?.map((discount) => (
                      <tr
                        key={discount?.id}
                        className="hover:bg-gold-50/50 transition"
                      >
                        <td className="px-3 py-2.5 font-medium text-gray-900">
                          {discount?.name}
                        </td>
                        <td className="px-3 py-2.5 text-right text-gray-700">
                          {discount?.total_discount_given}
                        </td>
                        <td className="px-3 py-2.5 text-right text-red-600 font-medium">
                          {formatCurrencyWithComma(
                            discount?.total_discount_given,
                          )}
                        </td>
                        <td className="px-3 py-2.5 text-right text-gray-700">
                          {formatCurrencyWithComma(discount?.avg_discount)}
                        </td>
                        <td className="px-3 py-2.5 text-right text-gray-700">
                          {formatCurrencyWithComma(discount?.max_discount)}
                        </td>
                        <td className="px-3 py-2.5 text-right">
                          <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">
                            {discount?.discount_percentage}%
                          </span>
                        </td>
                      </tr>
                    ))}
                    <tr className="hover:bg-gold-50/50 transition">
                      <td className="px-3 py-2.5 font-medium text-gray-900">
                        Amit Sharma
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        78
                      </td>
                      <td className="px-3 py-2.5 text-right text-red-600 font-medium">
                        ₹1,42,250
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        ₹1,824
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        ₹12,500
                      </td>
                      <td className="px-3 py-2.5 text-right">
                        <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">
                          5.00%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gold-50/50 transition">
                      <td className="px-3 py-2.5 font-medium text-gray-900">
                        Priya Patel
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        85
                      </td>
                      <td className="px-3 py-2.5 text-right text-red-600 font-medium">
                        ₹1,20,925
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        ₹1,423
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        ₹9,800
                      </td>
                      <td className="px-3 py-2.5 text-right">
                        <span className="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full text-xs font-medium">
                          4.75%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gold-50/50 transition">
                      <td className="px-3 py-2.5 font-medium text-gray-900">
                        Rahul Verma
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        52
                      </td>
                      <td className="px-3 py-2.5 text-right text-red-600 font-medium">
                        ₹93,600
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        ₹1,800
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        ₹15,000
                      </td>
                      <td className="px-3 py-2.5 text-right">
                        <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">
                          5.20%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gold-50/50 transition">
                      <td className="px-3 py-2.5 font-medium text-gray-900">
                        Sneha Gupta
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        68
                      </td>
                      <td className="px-3 py-2.5 text-right text-red-600 font-medium">
                        ₹76,810
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        ₹1,130
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        ₹7,200
                      </td>
                      <td className="px-3 py-2.5 text-right">
                        <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                          3.85%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gold-50/50 transition">
                      <td className="px-3 py-2.5 font-medium text-gray-900">
                        Vikram Singh
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        34
                      </td>
                      <td className="px-3 py-2.5 text-right text-red-600 font-medium">
                        ₹47,190
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        ₹1,388
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        ₹8,500
                      </td>
                      <td className="px-3 py-2.5 text-right">
                        <span className="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full text-xs font-medium">
                          4.50%
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* <!-- Customer Retention by Staff --> */}
        {true ? (
          <GoldCardSkeleton />
        ) : (
          <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Customer Retention by Staff
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              How well each staff member retains customers for repeat purchases
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gold-50 text-gold-800">
                    <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">
                      Staff Name
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Total Customers
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Repeat Customers
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Retention Rate
                    </th>
                    <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">
                      Performance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gold-50/50 transition">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Amit Sharma
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">87</td>
                    <td className="px-4 py-3 text-right text-gray-700">34</td>
                    <td className="px-4 py-3 text-right font-semibold text-green-600">
                      39.08%
                    </td>
                    <td className="px-4 py-3">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "39.08%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gold-50/50 transition">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Priya Patel
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">104</td>
                    <td className="px-4 py-3 text-right text-gray-700">45</td>
                    <td className="px-4 py-3 text-right font-semibold text-green-600">
                      43.27%
                    </td>
                    <td className="px-4 py-3">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "43.27%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gold-50/50 transition">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Rahul Verma
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">72</td>
                    <td className="px-4 py-3 text-right text-gray-700">25</td>
                    <td className="px-4 py-3 text-right font-semibold text-gold-600">
                      34.72%
                    </td>
                    <td className="px-4 py-3">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-gold-400 h-2 rounded-full"
                          style={{ width: "34.72%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gold-50/50 transition">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Sneha Gupta
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">91</td>
                    <td className="px-4 py-3 text-right text-gray-700">38</td>
                    <td className="px-4 py-3 text-right font-semibold text-green-600">
                      41.76%
                    </td>
                    <td className="px-4 py-3">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "41.76%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gold-50/50 transition">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      Vikram Singh
                    </td>
                    <td className="px-4 py-3 text-right text-gray-700">48</td>
                    <td className="px-4 py-3 text-right text-gray-700">14</td>
                    <td className="px-4 py-3 text-right font-semibold text-orange-600">
                      29.17%
                    </td>
                    <td className="px-4 py-3">
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-orange-400 h-2 rounded-full"
                          style={{ width: "29.17%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
