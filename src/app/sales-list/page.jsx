"use client";

import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";

import StatsCardsSkeleton from "@/components/skeleton/StatsCardsSkeleton";
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import { formatCurrencyWithComma, formatDate } from "@/constants/appConfig";
import { getPaymentModeChip } from "@/constants/colorUtils/paymentColor";
import { getRoleChip } from "@/constants/colorUtils/roleColors";
import { getStatusChip } from "@/constants/colorUtils/statusColor";
import { GetSales } from "@/redux/sale/sale.action";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SalesList() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [apiParams, setApiParams] = useState(() => ({
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
    limit: Number(searchParams.get("limit")) || 10,
  }));

  const isFirstRender = useRef(true);

  const { loading, data, paramsData, stats, isSaleLoading } = useSelector(
    (store) => store.sale,
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
    dispatch(GetSales(apiParams));
    // dispatch(GetMetalStats());
  }, [apiParams, dispatch, isSaleLoading]);

  useEffect(() => {
    console.log({ loading, data, paramsData, stats, isSaleLoading });
  }, [loading, data, paramsData, stats, isSaleLoading]);

  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* <!-- Page Header --> */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Sales &amp; Billing
            </h1>
            <p className="text-slate-500 mt-1">
              Manage invoices and track sales
            </p>
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
              New Sale
            </button>
            <a
              href="invoice.html"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium rounded-lg transition-colors text-sm"
            >
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              Create Invoice
            </a>
          </div>
        </div>

        {/* <!-- ============================================ 
                 SALES STATS
            ============================================= --> */}
        {loading ? (
          <StatsCardsSkeleton />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500"> Today's Sales</p>
              <p className="text-xl font-bold text-slate-800 mt-1">₹4,52,840</p>
              <p className="text-xs text-emerald-600 mt-1">
                +12.5% vs yesterday
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">This Week</p>
              <p className="text-xl font-bold text-slate-800 mt-1">
                ₹18,45,600
              </p>
              <p className="text-xs text-emerald-600 mt-1">
                +8.2% vs last week
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Invoices Today</p>
              <p className="text-xl font-bold text-slate-800 mt-1">24</p>
              <p className="text-xs text-slate-500 mt-1">5 pending</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Avg. Order Value</p>
              <p className="text-xl font-bold text-slate-800 mt-1">₹18,868</p>
              <p className="text-xs text-emerald-600 mt-1">+3.4% increase</p>
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
                placeholder="Search by invoice, customer name..."
                outerContainer={false}
              />
            </div>
            {/* <!-- Date Range --> */}
            <input
              type="date"
              className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
            />
            <span className="self-center text-slate-400">to</span>
            <input
              type="date"
              className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
            />
            {/* <!-- Status Filter --> */}
            <select
              id="statusFilter"
              className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {/* <!-- Payment Mode --> */}
            <select
              id="paymentFilter"
              className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
            >
              <option value="">All Payments</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="UPI">UPI</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>
        </div>

        {/* <!-- ============================================ 
                 SALES TABLE
            ============================================= --> */}
        {loading ? (
          <TableSkeleton />
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Invoice
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Sale Date
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Gross Amount
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Discount
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Tax
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Final Amount
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Payment Mode
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody
                  id="salesTableBody"
                  className="divide-y divide-slate-100"
                >
                  {data?.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-slate-800">
                          {item?.invoice_number}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 ${getRoleChip("")} rounded-full flex items-center justify-center`}
                          >
                            <span
                              className={`text-sm font-medium ${getRoleChip("")}`}
                            >
                              {item?.customer?.customer_name
                                ?.split(" ")
                                .map((word) => word[0])
                                .join("")
                                .toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-800">
                              {item?.customer?.customer_name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {item?.customer?.phone}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-800">
                          {formatDate(item?.sale_date)}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <p className="text-sm text-slate-600">
                          {formatCurrencyWithComma(item?.gross_amount)}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <p className="text-sm text-red-600">
                          {formatCurrencyWithComma(item?.discount)}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <p className="text-sm text-slate-600">
                          {formatCurrencyWithComma(item?.tax)}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <p className="text-sm font-semibold text-slate-800">
                          {formatCurrencyWithComma(item?.final_amount)}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getPaymentModeChip(item?.payments[0]?.payment_mode)}`}
                        >
                          {item?.payments[0]?.payment_mode}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusChip(item.status ? "Active" : "Inactive")}`}
                        >
                          {item.status ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                            title="View"
                          >
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
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              ></path>
                            </svg>
                          </button>
                          <button
                            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"
                            title="Print"
                          >
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
                          </button>
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
              title="invoices"
            />
          </div>
        )}
      </div>
    </main>
  );
}
