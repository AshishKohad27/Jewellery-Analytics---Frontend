"use client";

import EditSupplierDialog from "@/components/dataTable/EditModal";
import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";
import DynamicTable from "@/components/dataTable/Table";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

  const [open, setOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const handleEdit = (supplier) => {
    setSelectedSupplier(supplier);
    setOpen(true);
  };

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
            <button
              // onclick="document.getElementById('addSupplierModal').classList.remove('hidden')"
              className="px-4 py-2.5 bg-gold-500 text-white hover:bg-gold-600 rounded-lg text-sm font-medium flex items-center gap-2"
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Supplier
            </button>

            <EditSupplierDialog
              open={open}
              setOpen={setOpen}
              supplier={selectedSupplier}
              onSubmit={(data) => console.log("Updated:", data)}
            />
          </div>
        </div>

        {/* <!-- Stats Cards --> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Total Suppliers</p>
            <p className="text-2xl font-bold text-slate-800">24</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Active Suppliers</p>
            <p className="text-2xl font-bold text-emerald-600">20</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Inactive Suppliers</p>
            <p className="text-2xl font-bold text-red-600">4</p>
          </div>
        </div>

        {/* <!-- Search --> */}
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search by supplier name or email..."
        />

        {/* <!-- Suppliers Table --> */}
        {/* <!-- Schema: suppliers { id, supplier_name, phone, email (unique), status (boolean), created_at, updated_at } --> */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          {/* Table */}
          <DynamicTable
            data={[
              {
                id: 1,
                name: "Ashish Kohad",
                email: "ashish.admin@example.com",
                password_hash:
                  "$argon2id$v=19$m=65536,t=3,p=4$lN2YPwgYEnnRToVHlW3BIQ$oXpUbBZP01qazMzS65SJhV8Kx4X0vP20U+MfJWEt8Vs",
                status: true,
                role_id: 1,
              },
            ]}
            actions={[
              {
                label: "Edit",
                className: "bg-blue-100 text-blue-700",
                onClick: (row) => console.log("Edit", row),
              },
              {
                label: "Delete",
                className: "bg-red-100 text-red-700",
                onClick: (row) => console.log("Delete", row),
              },
            ]}
          />

          {/* <!-- Pagination --> */}
          <Pagination
            displayButtons={5}
            total={{ items: 100, pages: 10 }}
            onPage={handlePage}
            title="suppliers"
          />
        </div>
      </div>
    </main>
  );
}
