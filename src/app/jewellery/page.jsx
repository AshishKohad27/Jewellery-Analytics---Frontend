"use client";

import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";
import AddMetalDialog from "@/components/dialog/metals/AddMetalDialog";
import DelMetalDialog from "@/components/dialog/metals/DelMetalDialog";
import EditMetalDialog from "@/components/dialog/metals/EditMetalDialog";
import StatsCardsSkeleton from "@/components/skeleton/StatsCardsSkeleton";
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import {
  formatCurrencyCompact,
  formatCurrencyWithComma,
  formatDate,
  formatNumberWithComma,
} from "@/constants/appConfig";
import {
  getMetalBgColor,
  getMetalChip,
  getMetalTextColor,
} from "@/constants/colorUtils/metalColor";
import { getStatusChip } from "@/constants/colorUtils/statusColor";
import { GetJewelleryItems } from "@/redux/jewellery-item/jewellery-item.action";
import { GetMetals, GetMetalStats } from "@/redux/metal/metal.action";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function JewelleryItem() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [apiParams, setApiParams] = useState(() => ({
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
    limit: Number(searchParams.get("limit")) || 10,
  }));

  const isFirstRender = useRef(true);

  const { loading, data, paramsData, stats, isJewelleryItemLoading } =
    useSelector((store) => store.jewellery);
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
    dispatch(GetJewelleryItems(apiParams));
    // dispatch(GetMetalStats());
  }, [apiParams, dispatch, isJewelleryItemLoading]);

  useEffect(() => {
    // console.log({ loading, data, paramsData, stats, isJewelleryItemLoading });
  }, [loading, data, paramsData, stats, isJewelleryItemLoading]);

  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* <!-- Page Header --> */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Inventory Management
            </h1>
            <p className="text-slate-500 mt-1">
              Manage your jewellery stock and items
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2.5 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                ></path>
              </svg>
              Bulk Import
            </button>
            <Link
              href="/jewellery/jewellery-form"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-lg transition-colors shadow-lg shadow-gold-500/30"
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
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
              Add New Item
            </Link>
          </div>
        </div>

        {/* <!-- ============================================ 
                 INVENTORY STATS
            ============================================= --> */}
        {loading ? (
          <StatsCardsSkeleton />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Total Items</p>
              <p className="text-xl font-bold text-slate-800 mt-1">854</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Gold (AU)</p>
              <p className="text-xl font-bold text-gold-600 mt-1">412</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Silver (AG)</p>
              <p className="text-xl font-bold text-slate-600 mt-1">298</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Platinum (PT)</p>
              <p className="text-xl font-bold text-blue-600 mt-1">144</p>
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
                placeholder="Search by item name, SKU..."
                outerContainer={false}
              />
            </div>
            {/* <!-- Metal Filter --> */}
            <select
              id="invMetalFilter"
              className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
            >
              <option value="">All Metals</option>
              <option value="AU">Gold (AU)</option>
              <option value="AG">Silver (AG)</option>
              <option value="PT">Platinum (PT)</option>
            </select>
            {/* <!-- Category Filter --> */}
            <select
              id="invCategoryFilter"
              className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
            >
              <option value="">All Categories</option>
              <option value="NEC">Necklace</option>
              <option value="RNG">Ring</option>
              <option value="BNG">Bangle</option>
              <option value="EAR">Earrings</option>
              <option value="CHN">Chain</option>
              <option value="BRC">Bracelet</option>
              <option value="ANK">Anklet</option>
            </select>
            {/* <!-- Status Filter --> */}
            <select
              id="invStatusFilter"
              className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
            >
              <option value="">All Status</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
            {/* <!-- Sort --> */}
            <select className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none">
              <option value="">Sort By</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="weight">Weight</option>
            </select>
          </div>
        </div>

        {/* <!-- ============================================ 
                 INVENTORY TABLE
            ============================================= --> */}
        {loading ? (
          <TableSkeleton />
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table id="inventoryTable" className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-300 text-gold-500 focus:ring-gold-500"
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Item Details
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Metal
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Purity
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Cost Price
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Selling Price
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data?.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-slate-300 text-gold-500 focus:ring-gold-500"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center ${getMetalBgColor(item?.metal?.metal_name)}`}
                          >
                            <svg
                              className={`w-5 h-5 text-gold-600 ${getMetalTextColor(item?.metal?.metal_name)}`}
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
                              {item?.item_name}
                            </p>
                            <p className="text-xs text-slate-500">
                              SKU: {item?.sku}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getMetalChip(item?.metal?.metal_name)}`}
                        >
                          {item?.metal?.metal_name} ({item?.metal?.metal_code})
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getMetalChip(item?.category?.category_name)}`}
                        >
                          {item?.category?.category_name} (
                          {item?.category?.category_code})
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-slate-600">
                        {item?.purity}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 text-right">
                        {formatCurrencyWithComma(item?.cost_price)}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-800 text-right">
                        {formatCurrencyWithComma(item?.selling_price)}
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
                          <a
                            href="inventory-form.html"
                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                            title="Edit"
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
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              ></path>
                            </svg>
                          </a>
                          <button
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                            title="Delete"
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
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
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
              title="metals"
            />
          </div>
        )}
      </div>
    </main>
  );
}
