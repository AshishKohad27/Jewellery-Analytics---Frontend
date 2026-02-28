"use client";

import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";
import AddCategoryDialog from "@/components/dialog/category/AddCategoryDialog";
import AddMetalDialog from "@/components/dialog/metals/AddMetalDialog";
import DelCategoryDialog from "@/components/dialog/category/DelCategoryDialog";
import EditMetalDialog from "@/components/dialog/metals/EditMetalDialog";
import MasterDataSkeleton from "@/components/skeleton/MasterDataSkeleton";
import { formatDate } from "@/constants/appConfig";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EditCategoryDialog from "@/components/dialog/category/EditCategoryDialog";

const initialStateParams = {
  search: "",
  page: 1,
  limit: 12,
};

export default function CategoryList() {
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
    console.log("params: ", params);

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
            <h1 className="text-2xl font-bold text-slate-800">Categories</h1>
            <p className="text-slate-500 mt-1">Manage jewellery item categories</p>
          </div>
          <div className="flex items-center gap-3">
            <button
             
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
                ></path>
              </svg>
              Bulk Import
            </button>
            <AddCategoryDialog />
          </div>
        </div>

        {/* <!-- Stats Cards --> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Total Categories</p>
            <p className="text-2xl font-bold text-slate-800">8</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Active Categories</p>
            <p className="text-2xl font-bold text-emerald-600">7</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Inactive Categories</p>
            <p className="text-2xl font-bold text-red-600">1</p>
          </div>
        </div>

        {/* <!-- Search --> */}
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search by category name or code..."
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
                    Category Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Category Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Description
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                    Status
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
                <tr
                  className="hover:bg-slate-50"
                  data-name="Necklace"
                  data-code="NEC"
                >
                  <td className="px-6 py-4 text-sm text-slate-600">1</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">
                    Necklace
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">NEC</td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Necklaces and chains worn around neck
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {" "}
                    {formatDate("2026-02-26T16:31:08.763Z")}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <EditCategoryDialog />
                      <DelCategoryDialog />
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
            title="categories"
          />
        </div>
      </div>
    </main>
  );
}
