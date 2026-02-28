"use client";

import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";
import AddSupplierDialog from "@/components/dialog/suppliers/AddSupplierDialog";
import DelSupplierDialog from "@/components/dialog/suppliers/DelSupplierDialog";
import EditSupplierDialog from "@/components/dialog/suppliers/EditSupplierDialog";
import StatsCardsSkeleton from "@/components/skeleton/StatsCardsSkeleton";
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import { formatDate } from "@/constants/appConfig";
import { getStatusChip } from "@/constants/colorUtils/statusColor";
import {
  GetSuppliers,
  GetSupplierStats,
} from "@/redux/supplier/supplier.action";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const initialStateParams = {
  search: "",
  page: 1,
  limit: 12,
};

export default function SupplierList() {
  const [apiParams, setApiParams] = useState(initialStateParams);
  const [isHydrated, setIsHydrated] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    loading,
    error,
    successMessage,
    errorMessage,
    data,
    paramsData,
    stats,
    isSupplierLoading,
  } = useSelector((state) => state.supplier);
  const dispatch = useDispatch();

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

    const params = new URLSearchParams();

    Object.entries(apiParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    const newQuery = params.toString();
    router.replace(`?${newQuery}`, { scroll: false });
  }, [apiParams, router, isHydrated]);

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
    dispatch(GetSuppliers(apiParams));
    dispatch(GetSupplierStats());
  }, [apiParams, dispatch, isSupplierLoading]);


  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* <!-- Page Header --> */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Suppliers</h1>
            <p className="text-slate-500 mt-1">
              Manage your jewellery suppliers
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

            <AddSupplierDialog />
          </div>
        </div>

        {/* <!-- Stats Cards --> */}
        {loading ? (
          <StatsCardsSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500 mb-1">Total Suppliers</p>
              <p className="text-2xl font-bold text-slate-800">
                {stats?.total}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500 mb-1">Active Suppliers</p>
              <p className="text-2xl font-bold text-emerald-600">
                {stats?.active}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500 mb-1">Inactive Suppliers</p>
              <p className="text-2xl font-bold text-red-600">
                {stats?.inactive}
              </p>
            </div>
          </div>
        )}

        {/* <!-- Search --> */}
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search by supplier name or email..."
        />

        {/* <!-- Table --> */}
        {loading ? (
          <TableSkeleton />
        ) : (
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
                      Supplier Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                      Phone
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
                  {data?.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50"
                      data-supplier-name="Rajesh Gold Traders"
                      data-supplier-email="rajesh@goldtraders.com"
                    >
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-800">
                        {item?.supplier_name}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {item?.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {item?.phone}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusChip(item.status ? "Active" : "Inactive")}`}
                        >
                          {item.status ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {formatDate(item?.created_at)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <EditSupplierDialog
                            supplierId={item?.id}
                            supplierData={item}
                          />
                          <DelSupplierDialog supplierId={item?.id} />
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
              title="suppliers"
            />
          </div>
        )}
      </div>
    </main>
  );
}
