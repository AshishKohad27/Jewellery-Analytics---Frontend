"use client";

import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";
import AddMetalDialog from "@/components/dialog/metals/AddMetalDialog";
import DelMetalDialog from "@/components/dialog/metals/DelMetalDialog";
import EditMetalDialog from "@/components/dialog/metals/EditMetalDialog";
import StatsCardsSkeleton from "@/components/skeleton/StatsCardsSkeleton";
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import { formatDate, formatTime } from "@/constants/appConfig";
import {
  getMetalBgColor,
  getMetalChip,
  getMetalTextColor,
} from "@/constants/colorUtils/metalColor";
import {
  getTransactionTypeChip,
  getTransactionTypeHex,
  getTransactionTypeIcon,
  getTransactionTypeTextColor,
} from "@/constants/colorUtils/transactionType";
import { GetInventories } from "@/redux/inventory/inventory.action";
import { GetMetals, GetMetalStats } from "@/redux/metal/metal.action";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function StockMovement() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [apiParams, setApiParams] = useState(() => ({
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
    limit: Number(searchParams.get("limit")) || 10,
  }));

  const isFirstRender = useRef(true);

  const { loading, data, paramsData, stats, isInventoryLoading } = useSelector(
    (store) => store.inventory,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const params = new URLSearchParams();

    Object.entries(apiParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    const newQuery = params.toString();
    router.replace(`?${newQuery}`, { scroll: false });
  }, [apiParams, router]);

  // Handle Inputs
  const handleSearch = useCallback((value) => {
    setApiParams((prev) => ({
      ...prev,
      search: value,
      page: 1,
    }));
  }, []);

  const handlePage = useCallback((page) => {
    setApiParams((prev) => ({
      ...prev,
      page,
    }));
  }, []);

  useEffect(() => {
    dispatch(GetInventories(apiParams));
    // dispatch(GetMetalStats());
  }, [apiParams, dispatch, isInventoryLoading]);

  useEffect(() => {
    console.log({ loading, data, paramsData, stats, isInventoryLoading });
  }, [loading, data, paramsData, stats, isInventoryLoading]);

  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* <!-- Page Header --> */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">
                  Stock Movement
                </h1>
                <p className="text-slate-500 mt-0.5">
                  Inventory transaction history for audit &amp; tracking
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-lg transition-colors shadow-lg shadow-gold-500/30">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
              Record Movement
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-colors">
              <svg
                className="w-5 h-5"
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
              Export CSV
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                ></path>
              </svg>
              Print Report
            </button>
          </div>
        </div>

        {/* <!-- ============================================
                 SUMMARY STATS
            ============================================= --> */}
        {loading ? (
          <StatsCardsSkeleton />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
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
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Stock In (Today)</p>
                  <p className="text-xl font-bold text-emerald-600 mt-0.5">
                    +245.8 gm
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Stock Out (Today)</p>
                  <p className="text-xl font-bold text-red-600 mt-0.5">
                    -128.5 gm
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
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
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Transactions (Today)</p>
                  <p className="text-xl font-bold text-slate-800 mt-0.5">32</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Adjustments</p>
                  <p className="text-xl font-bold text-amber-600 mt-0.5">5</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <!-- ============================================
                 FILTERS & SEARCH
            ============================================= --> */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* <!-- Search --> */}
            <div className="flex-1">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search by item name, SKU, reference..."
                outerContainer={false}
              />
            </div>
            {/* <!-- Transaction Type Filter --> */}
            <select
              id="stockTypeFilter"
              className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
            >
              <option value="">All Transactions</option>
              <option value="PURCHASE">PURCHASE</option>
              <option value="SALE">SALE</option>
              <option value="RETURN">RETURN</option>
              <option value="ADJUSTMENT">ADJUSTMENT</option>
            </select>
            {/* <!-- Date Range --> */}
            <div className="flex items-center gap-2">
              <input
                type="date"
                className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
              />
              <span className="text-slate-400">to</span>
              <input
                type="date"
                className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
              />
            </div>
            {/* <!-- Apply Filter Button --> */}
            <button className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors text-sm">
              Apply Filters
            </button>
          </div>
        </div>

        {/* <!-- ============================================ 
                 AUDIT INFO BAR
            ============================================= --> */}
        <div className="hidden bg-slate-700 rounded-xl p-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Audit Trail</p>
              <p className="text-xs text-slate-400">
                Read-only view of all inventory transactions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-slate-400">
              Last updated:{" "}
              <span className="text-white">Jan 20, 2024, 4:35 PM</span>
            </span>
            <button className="text-gold-400 hover:text-gold-300 font-medium">
              Refresh
            </button>
          </div>
        </div>

        {/* <!-- ============================================ 
                 STOCK MOVEMENT TABLE
            ============================================= -->*/}
        {loading ? (
          <TableSkeleton />
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table id="stockTable" className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Transaction Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Jewellery Item
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Transaction Type
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Qty Change
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Weight Change
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Notes
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Created By
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data?.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-slate-800">
                          {formatDate(item?.transaction_date)}
                        </p>
                        <p className="text-xs text-slate-500">
                          {formatTime(item?.transaction_date)}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`jewellery/${item?.jewellery_item_id}`}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center ${getMetalBgColor(item?.jewellery_item?.metal?.metal_name)}`}
                          >
                            <svg
                              className={`w-5 h-5 text-gold-600 ${getMetalTextColor(item?.jewellery_item?.metal?.metal_name)}`}
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
                          <div>
                            <p className="text-sm font-medium text-slate-800">
                              {item?.jewellery_item?.item_name}
                            </p>
                            <p className="text-xs text-slate-500">
                              SKU: {item?.jewellery_item?.sku}
                            </p>
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${getTransactionTypeChip(item?.transaction_type)}`}
                        >
                          {getTransactionTypeIcon(item?.transaction_type)}
                          {item?.transaction_type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={`text-sm font-bold ${getTransactionTypeTextColor(item?.transaction_type)}`}
                        >
                          {item?.transaction_type === "PURCHASE" ||
                          item?.transaction_type === "ADJUSTMENT"
                            ? "+"
                            : ""}
                          {item?.quantity_change}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={`text-sm font-bold ${getTransactionTypeTextColor(item?.transaction_type)}`}
                        >
                          {item?.transaction_type === "PURCHASE" ||
                          item?.transaction_type === "ADJUSTMENT"
                            ? "+"
                            : ""}
                          {item?.weight_change} gm
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-600">{item?.notes}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-slate-600">
                              {item?.created_user?.name
                                ?.split(" ")
                                .map((word) => word[0])
                                .join("")
                                .toUpperCase()}
                            </span>
                          </div>
                          <span className="text-sm text-slate-700">
                            {item?.created_user?.name}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* <!-- Pagination --> */}
            <Pagination
              displayButtons={5}
              total={paramsData?.total}
              onPage={handlePage}
              title="transactions"
            />
          </div>
        )}
      </div>
    </main>
  );
}
