"use client";

import StatsCardsSkeleton from "@/components/skeleton/StatsCardsSkeleton";
import {
  formatCurrencyWithComma,
  formatNumberWithComma,
} from "@/constants/appConfig";
import { GetCustomerStats } from "@/redux/analytics/customer/customer.action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Customers() {
  const { loading, error, stats } = useSelector(
    (store) => store.analytics.customer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCustomerStats());
  }, [dispatch]);

  useEffect(() => {
    console.log({ loading, error, stats });
  }, [loading, error, stats]);

  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* <!-- Page Header --> */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Customer Analytics
            </h1>
            <p className="text-slate-500 mt-1">
              Understand your customer base and behavior
            </p>
          </div>
          <div className="relative">
            <button className="px-4 py-2.5 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium inline-flex items-center gap-2">
              Export Report
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="customersExportDropdown"
              className="hidden absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 z-50 py-1"
            >
              <button className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Export as CSV
              </button>
              <button className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Export as PDF
              </button>
            </div>
          </div>
        </div>

        {/* <!-- ============================================ 
                 CUSTOMER OVERVIEW CARDS
            ============================================= --> */}
        {loading ? (
          <StatsCardsSkeleton cards={4} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {/* <!-- Total Customers --> */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  +{stats?.customerTotal?.new} new
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-1">Total Customers</p>
              <p className="text-2xl font-bold text-slate-800">
                {formatNumberWithComma(stats?.customerTotal?.total)}
              </p>
              <p className="text-xs text-slate-400 mt-2">All time registered</p>
            </div>

            {/* <!-- Repeat Customers --> */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center">
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  {stats?.repeatCustomers?.percentage}%
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-1">Repeat Customers</p>
              <p className="text-2xl font-bold text-gold-600">
                {formatNumberWithComma(stats?.repeatCustomers?.total)}
              </p>
              <p className="text-xs text-slate-400 mt-2">2+ purchases</p>
            </div>

            {/* <!-- High-Value Customers --> */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
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
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-1">
                High-Value Customers
              </p>
              <p className="text-2xl font-bold text-purple-600">
                {" "}
                {formatNumberWithComma(stats?.highValueCustomers?.total)}
              </p>
              <p className="text-xs text-slate-400 mt-2">₹5L+ lifetime spend</p>
            </div>

            {/* <!-- Customer Lifetime Value --> */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  +12%
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-1">Avg. Lifetime Value</p>
              <p className="text-2xl font-bold text-slate-800">
                {" "}
                {formatCurrencyWithComma(stats?.avgLifetimeValue?.total)}
              </p>
              <p className="text-xs text-slate-400 mt-2">Per customer</p>
            </div>
          </div>
        )}

        {/* <!-- ============================================ 
                 CUSTOMER SEGMENTATION 
            ============================================= --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* <!-- Customer Segments --> */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Customer Segments
            </h3>
            <div className="h-64 mb-4">
              <canvas id="customerSegmentChart"></canvas>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gold-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  <span className="text-sm font-medium text-gold-800">
                    Loyal
                  </span>
                </div>
                <p className="text-lg font-bold text-gold-700">156</p>
                <p className="text-xs text-gold-600">
                  5+ purchases, 12% of total
                </p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm font-medium text-blue-800">
                    Regular
                  </span>
                </div>
                <p className="text-lg font-bold text-blue-700">342</p>
                <p className="text-xs text-blue-600">
                  2-4 purchases, 27% of total
                </p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span className="text-sm font-medium text-emerald-800">
                    New
                  </span>
                </div>
                <p className="text-lg font-bold text-emerald-700">375</p>
                <p className="text-xs text-emerald-600">
                  1 purchase, 29% of total
                </p>
              </div>
              <div className="p-3 bg-slate-100 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                  <span className="text-sm font-medium text-slate-700">
                    Inactive
                  </span>
                </div>
                <p className="text-lg font-bold text-slate-600">411</p>
                <p className="text-xs text-slate-500">
                  No purchase in 6mo, 32%
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Customer Growth --> */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-800">
                Customer Growth
              </h3>
              <select className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 text-slate-600">
                <option>Last 12 months</option>
                <option>Last 6 months</option>
                <option>This year</option>
              </select>
            </div>
            <div className="h-64">
              <canvas id="customerGrowthChart"></canvas>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg text-center">
                <p className="text-lg font-bold text-emerald-700">+124</p>
                <p className="text-xs text-emerald-600">New this month</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="text-lg font-bold text-blue-700">218</p>
                <p className="text-xs text-blue-600">Returning this month</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ============================================ 
                 HIGH-VALUE & REPEAT CUSTOMERS
            ============================================= --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* <!-- High-Value Customers --> */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-purple-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.5 8a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h4.293l-1.147 1.146a.5.5 0 00.708.708l2-2a.5.5 0 000-.708l-2-2a.5.5 0 00-.708.708L9.793 10H5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-800">
                    High-Value Customers
                  </h3>
                  <p className="text-sm text-purple-600">
                    Top spenders (₹5L+ lifetime)
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                      Customer
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase">
                      Total Spent
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                      Purchases
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-gold-700">
                            SK
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            Sunita Kapoor
                          </p>
                          <p className="text-xs text-slate-500">
                            Frequent Buyer
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right text-sm font-semibold text-slate-800">
                      ₹32,80,000
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-slate-600">
                      18
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-gold-700">
                            RS
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            Rajesh Sharma
                          </p>
                          <p className="text-xs text-slate-500">
                            Frequent Buyer
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right text-sm font-semibold text-slate-800">
                      ₹18,45,000
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-slate-600">
                      12
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-purple-700">
                            MJ
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            Meera Joshi
                          </p>
                          <p className="text-xs text-slate-500">
                            Frequent Buyer
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right text-sm font-semibold text-slate-800">
                      ₹15,20,000
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-slate-600">
                      9
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-blue-700">
                            AR
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            Arjun Reddy
                          </p>
                          <p className="text-xs text-slate-500">
                            Frequent Buyer
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right text-sm font-semibold text-slate-800">
                      ₹12,85,000
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-slate-600">
                      7
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-slate-100 text-center">
              <a
                href="customer-list.html"
                className="text-sm text-purple-600 hover:text-purple-700 font-medium"
              >
                View All 156 High-Value Customers →
              </a>
            </div>
          </div>

          {/* <!-- Repeat Customer Analysis --> */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Repeat Purchase Analysis
            </h3>

            {/* <!-- Purchase Frequency --> */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-slate-700 mb-3">
                Purchase Frequency
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">1 purchase</span>
                    <span className="font-medium text-slate-800">
                      411 (32%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-400 h-2 rounded-full w-[32%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">2-4 purchases</span>
                    <span className="font-medium text-slate-800">
                      375 (29%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[29%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">5-9 purchases</span>
                    <span className="font-medium text-slate-800">
                      342 (27%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full w-[27%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">10+ purchases</span>
                    <span className="font-medium text-slate-800">
                      156 (12%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gold-500 h-2 rounded-full w-[12%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Key Metrics --> */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 rounded-lg text-center">
                <p className="text-xl font-bold text-slate-800">45 days</p>
                <p className="text-xs text-slate-500">
                  Avg. Time Between Purchases
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg text-center">
                <p className="text-xl font-bold text-slate-800">68%</p>
                <p className="text-xs text-slate-500">Repeat Purchase Rate</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg text-center">
                <p className="text-xl font-bold text-slate-800">3.2</p>
                <p className="text-xs text-slate-500">
                  Avg. Purchases/Customer
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg text-center">
                <p className="text-xl font-bold text-gold-600">₹87,500</p>
                <p className="text-xs text-slate-500">Avg. Order Value</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ============================================ 
                 CUSTOMER PREFERENCES
            ============================================= --> */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            Customer Preferences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Preferred Categories --> */}
            <div>
              <h4 className="text-sm font-medium text-slate-700 mb-4">
                Preferred Categories
              </h4>
              <div className="h-48 mb-3">
                <canvas id="preferredCategoryChart"></canvas>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Necklaces</span>
                  <span className="font-medium text-slate-800">42%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Bangles</span>
                  <span className="font-medium text-slate-800">28%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Rings</span>
                  <span className="font-medium text-slate-800">18%</span>
                </div>
              </div>
            </div>

            {/* <!-- Preferred Metal --> */}
            <div>
              <h4 className="text-sm font-medium text-slate-700 mb-4">
                Preferred Metal Type
              </h4>
              <div className="h-48 mb-3">
                <canvas id="preferredMetalChart"></canvas>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                    <span className="text-slate-600">Gold</span>
                  </div>
                  <span className="font-medium text-slate-800">65%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                    <span className="text-slate-600">Silver</span>
                  </div>
                  <span className="font-medium text-slate-800">22%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-slate-600">Platinum</span>
                  </div>
                  <span className="font-medium text-slate-800">13%</span>
                </div>
              </div>
            </div>

            {/* <!-- Purchase Occasions --> */}
            <div>
              <h4 className="text-sm font-medium text-slate-700 mb-4">
                Purchase Occasions
              </h4>
              <div className="h-48 mb-3">
                <canvas id="purchaseOccasionChart"></canvas>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Wedding Season</span>
                  <span className="font-medium text-emerald-600">Peak</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Diwali</span>
                  <span className="font-medium text-emerald-600">Peak</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Akshaya Tritiya</span>
                  <span className="font-medium text-emerald-600">Peak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
