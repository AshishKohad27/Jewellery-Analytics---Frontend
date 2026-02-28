"use client";

import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";
import AddMetalDialog from "@/components/dialog/metals/AddMetalDialog";
import DelMetalDialog from "@/components/dialog/metals/DelMetalDialog";
import EditMetalDialog from "@/components/dialog/metals/EditMetalDialog";
import MasterDataSkeleton from "@/components/skeleton/MasterDataSkeleton";
import { formatDate } from "@/constants/appConfig";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const initialStateParams = {
  search: "",
  page: 1,
  limit: 12,
};

export default function MetalList() {
  const [apiParams, setApiParams] = useState(initialStateParams);
  const [isHydrated, setIsHydrated] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isHydrated) return;

    const paramsFromUrl = {
      search: searchParams.get("search") || "",
      page: Number(searchParams.get("page")) || 1,
      limit: Number(searchParams.get("limit")) || 10,
    };

    setApiParams((prev) => ({
      ...prev,
      ...paramsFromUrl,
    }));

    setIsHydrated(true);
  }, [searchParams, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;

    const params = new URLSearchParams(searchParams.toString());
    // console.log("params: ", params);

    Object.entries(apiParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    const newQuery = params.toString();
    const currentQuery = searchParams.toString();

    if (newQuery !== currentQuery) {
      router.replace(`?${newQuery}`, { scroll: false });
    }
  }, [apiParams, router, searchParams, isHydrated]);

  // Handle Inputs
  const handleSearch = (value) => {
    setApiParams((prev) => ({
      ...prev,
      search: value,
      page: 1,
    }));
  };

  const handlePage = (page) => {
    setApiParams((prev) => ({
      ...prev,
      page,
    }));
  };

  if (false) {
    return <MasterDataSkeleton />;
  }

  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* <!-- Page Header --> */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Metals</h1>
            <p className="text-slate-500 mt-1">
              Manage metal types for jewellery items
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              // onclick="document.getElementById('bulkImportModal').classList.remove('hidden')"
              className="px-4 py-2.5 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
            >
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
                />
              </svg>
              Bulk Import
            </button>

            <AddMetalDialog />
          </div>
        </div>

        {/* <!-- Stats Cards --> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Total Metals</p>
            <p className="text-2xl font-bold text-slate-800">5</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Metal Codes</p>
            <p className="text-2xl font-bold text-slate-800">AU, AG, PT, RG, WG</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Recently Added</p>
            <p className="text-2xl font-bold text-slate-800">White Gold</p>
          </div>
        </div>

        {/* <!-- Search --> */}
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search by metal name or code..."
        />

        {/* <!-- Table --> */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full" id="suppliersTable">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Metal Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Metal Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Created At
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm text-slate-600">1</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">
                    Gold
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">AU</td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Pure gold metal
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {formatDate("2026-02-26T16:31:08.763Z")}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <EditMetalDialog />
                      <DelMetalDialog />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <!-- Pagination --> */}
          <Pagination
            displayButtons={5}
            total={{ items: 100, pages: 10 }}
            onPage={handlePage}
            title="metals"
          />
        </div>
      </div>
    </main>
  );
}
