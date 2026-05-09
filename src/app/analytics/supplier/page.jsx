"use client";

import { useEffect } from "react";
import {
  ItemsPerSupplierChart,
  RevenueContributionChart,
  CategoryDistributionChart,
  CostVsSellingChart,
} from "./SupplierCharts";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCostvsSellingPriceSupplier,
  GetItemCategoryDistributionOfSupplier,
  GetItemsPerSupplier,
  GetSupplierPerformance,
  GetSupplierRevenueContribution,
  GetSupplierStats,
} from "@/redux/analytics/supplier/supplier.action";
import StatsCardsSkeleton from "@/components/skeleton/StatsCardsSkeleton";
import GoldCardSkeleton from "@/components/skeleton/GoldCardSkeleton";
import {
  formatCurrencyCompact,
  formatCurrencyWithComma,
  formatDate,
} from "@/constants/appConfig";
import { Avatar } from "@/constants/colorUtils/avatarColor";

export default function SupplierLayout() {
  const {
    loading,
    stats,
    itemsPerSupplier,
    revenue,
    performance,
    itemCategoryDistribution,
    costVsSellingPrice,
  } = useSelector((state) => state.analytics.supplier);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSupplierStats());
    dispatch(GetItemsPerSupplier());
    dispatch(GetSupplierRevenueContribution());
    dispatch(GetSupplierPerformance());
    dispatch(GetItemCategoryDistributionOfSupplier());
    dispatch(GetCostvsSellingPriceSupplier());
  }, []);

  useEffect(() => {
    console.log({
      loading,
      stats,
      itemsPerSupplier,
      revenue,
      performance,
      itemCategoryDistribution,
      costVsSellingPrice,
    });
  }, [
    loading,
    stats,
    itemsPerSupplier,
    revenue,
    performance,
    itemCategoryDistribution,
    costVsSellingPrice,
  ]);
  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* <!-- Page Header --> */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Supplier Analytics
            </h1>
            <p className="text-slate-500 mt-1">
              Analyze supplier performance with SQL queries and visual charts
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none bg-white">
              <option>All Time</option>
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 90 days</option>
              <option>This Year</option>
            </select>
            <button className="px-4 py-2.5 bg-gold-500 text-white rounded-lg text-sm font-medium hover:bg-gold-600 transition-colors flex items-center gap-2">
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              Export
            </button>
          </div>
        </div>

        {/* <!-- ============================================ 
                 SECTION 1: KPI CARDS
            ============================================= -->*/}

        {loading ? (
          <StatsCardsSkeleton cards={4} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {/* <!-- KPI Card 1: Total Suppliers --> */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  +2 new
                </span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                {stats?.totalActiveSuppliers}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Total Active Suppliers
              </p>
            </div>

            {/* <!-- KPI Card 2: Items Supplied --> */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {stats?.itemsSupplied} total
                </span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                {stats?.itemsSupplied}
              </h3>
              <p className="text-sm text-slate-500 mt-1">Items Supplied</p>
            </div>

            {/* <!-- KPI Card 3: Top Supplier Revenue --> */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gold-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <span className="text-xs font-medium text-gold-600 bg-gold-50 px-2 py-1 rounded-full">
                  {stats?.topSupplierRevenue?.supplier_name}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                {formatCurrencyCompact(stats?.topSupplierRevenue?.revenue)}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Top Supplier Revenue
              </p>
            </div>

            {/* <!-- KPI Card 4: Avg Items Per Supplier --> */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
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
                  per supplier
                </span>
              </div>
              <h3 className="text-3xl font-bold text-slate-800">
                {stats?.avgItemsPerSupplier}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Avg Items Per Supplier
              </p>
            </div>
          </div>
        )}

        {/* <!-- ============================================ 
                 SECTION 2 & 3: Charts Row
            ============================================= -->*/}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          {/* <!-- Items Per Supplier Bar Chart --> */}
          {loading ? (
            <GoldCardSkeleton variant="chart" />
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Items Per Supplier
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Item count and value by supplier
                  </p>
                </div>
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="h-72">
                <ItemsPerSupplierChart suppliers={itemsPerSupplier} />
              </div>
            </div>
          )}

          {/* <!-- Supplier Revenue Contribution Pie Chart --> */}
          {loading ? (
            <GoldCardSkeleton variant="chart" />
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Revenue Contribution
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Supplier share of total revenue
                  </p>
                </div>
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
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="h-72">
                <RevenueContributionChart suppliers={revenue} />
              </div>
            </div>
          )}
        </div>

        {/* <!-- ============================================ 
                 SECTION 4: Supplier Performance Table
            ============================================= -->*/}
        {loading ? (
          <GoldCardSkeleton variant="table" />
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Supplier Performance
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Comprehensive supplier metrics overview
                </p>
              </div>
              <div className="flex items-center gap-2 mt-3 sm:mt-0">
                <div className="relative">
                  <svg
                    className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search suppliers..."
                    className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none w-48"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-600">
                      #
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-600">
                      Supplier Name
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-600">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-600">
                      Phone
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-600">
                      Items
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-600">
                      Sales
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-600">
                      Revenue
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-600">
                      Avg Margin
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-600">
                      Since
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {performance?.map((supplier, index) => (
                    <tr key={supplier.id} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 text-slate-500">
                        {index + 1}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <>
                            <Avatar name={supplier.supplier_name} />
                          </>
                          <span className="font-medium text-slate-800">
                            {supplier.supplier_name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {supplier.email}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {supplier.phone}
                      </td>
                      <td className="py-3.5 px-4 text-right font-medium text-slate-800">
                        {supplier.total_items}
                      </td>
                      <td className="py-3.5 px-4 text-right font-medium text-slate-800">
                        {supplier.total_sales}
                      </td>
                      <td className="py-3.5 px-4 text-right font-semibold text-emerald-600">
                        {formatCurrencyCompact(supplier.total_revenue)}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                          {formatCurrencyWithComma(supplier.avg_profit_margin)}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500">
                        {formatDate(supplier.supplier_since)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* <!-- ============================================ 
                 SECTION 5 & 6: Bottom Charts Row
            ============================================= -->*/}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          {/* <!-- Supplier Item Category Distribution (Stacked Bar) --> */}
          {loading ? (
            <GoldCardSkeleton variant="chart" />
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Item Category Distribution
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Category breakdown by supplier
                  </p>
                </div>
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
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="h-72">
                <CategoryDistributionChart
                  data={itemCategoryDistribution}
                />
              </div>
            </div>
          )}

          {/* <!-- Cost vs Selling Price by Supplier (Grouped Bar) --> */}
          {loading ? (
            <GoldCardSkeleton variant="chart" />
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Cost vs Selling Price
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Average cost, selling price &amp; margin by supplier
                  </p>
                </div>
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="h-72">
                <CostVsSellingChart suppliers={costVsSellingPrice} />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
