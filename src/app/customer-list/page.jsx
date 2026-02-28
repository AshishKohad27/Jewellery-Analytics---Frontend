"use client";
import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";
import AddCustomerDialog from "@/components/dialog/customer/AddCustomerDialog";
import DelUserDialog from "@/components/dialog/user/DelUserDialog";
import EditUserDialog from "@/components/dialog/user/EditUserDialog";
import { formatDate } from "@/constants/appConfig";
import { getStatusChip } from "@/constants/colorUtils/statusColor";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Users() {
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

  if (false) {
    return <MasterDataSkeleton />;
  }

  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* <!-- Page Header --> */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Customer Management
            </h1>
            <p className="text-slate-500 mt-1">Manage your customer database</p>
          </div>
          <AddCustomerDialog />
        </div>

        {/* <!-- Stats Cards --> */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500">Total Customers</p>
            <p className="text-xl font-bold text-slate-800 mt-1">1,284</p>
            <p className="text-xs text-slate-500 mt-1">All registered customers</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500">Active Customers</p>
            <p className="text-xl font-bold text-emerald-600 mt-1">1,198</p>
            <p className="text-xs text-slate-500 mt-1">status = active</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500">New This Month</p>
            <p className="text-xl font-bold text-blue-600 mt-1">24</p>
            <p className="text-xs text-slate-500 mt-1">By created_at date</p>
          </div>
        </div>

        {/* <!-- Search And Filter --> */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* <!-- Search --> */}
            <div className="flex-1">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search by name, phone, email..."
                outerContainer={false}
              />
            </div>
            {/* <!-- Status Filter --> */}
            <select
              id="statusFilter"
              className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
              onchange="filterCustomers()"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {/* <!-- Sort --> */}
            <select className="px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none">
              <option value="">Sort By</option>
              <option value="name">Name (A-Z)</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
            {/* <!-- Export --> */}
            <button className="px-4 py-2.5 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium">
              Export
            </button>
          </div>
        </div>

        {/* <!--  Table --> */}

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Customer Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Created At
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody id="usersTableBody" className="divide-y divide-slate-100">
                <tr
                  className="hover:bg-slate-50"
                  data-name="Rajesh Sharma"
                  data-email="rajesh.sharma@email.com"
                  data-phone="+91 98765 43210"
                  data-status="active"
                >
                  <td className="px-6 py-4">
                    <a
                      href="customer-profile.html"
                      className="flex items-center gap-3 hover:text-gold-600"
                    >
                      <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gold-700">
                          RS
                        </span>
                      </div>
                      <span className="text-sm font-medium text-slate-800">
                        Rajesh Sharma
                      </span>
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    rajesh.sharma@email.com
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    +91 98765 43210
                  </td>
                  <td className="px-6 py-4 text-center">
                   <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusChip("Active")}`}
                    >
                      Active
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusChip("Inactive")}`}
                    >
                      Inactive
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">Jan 15, 2022</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <a
                        href="/customer-list/1"
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
                      </a>
                      <EditUserDialog />
                      <DelUserDialog />
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
            title="users"
          />
        </div>
      </div>
    </main>
  );
}

const initialStateParams = {
  search: "",
  page: 1,
  limit: 12,
};
