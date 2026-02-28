"use client";
import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";
import AddUserDialog from "@/components/dialog/user/AddUserDialog";
import DelUserDialog from "@/components/dialog/user/DelUserDialog";
import EditUserDialog from "@/components/dialog/user/EditUserDialog";
import { formatDate } from "@/constants/appConfig";
import { getStatusChip } from "@/constants/colorUtils/statusColor";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
            <h1 className="text-2xl font-bold text-slate-800">
              User Management
            </h1>
            <p className="text-slate-500 mt-1">
              Manage staff accounts and permissions
            </p>
          </div>
          <AddUserDialog />
        </div>

        {/* <!-- Stats Cards --> */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500">Total Users</p>
            <p className="text-xl font-bold text-slate-800 mt-1">8</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500">Active Users</p>
            <p className="text-xl font-bold text-emerald-600 mt-1">7</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500">Inactive Users</p>
            <p className="text-xl font-bold text-slate-400 mt-1">1</p>
          </div>
        </div>

        {/* <!-- Search --> */}
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search by role name or description..."
        />

        {/* <!--  Table --> */}

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Role
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Last Login
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody id="usersTableBody" className="divide-y divide-slate-100">
                {/* <!-- User 1 --> */}
                <tr
                  className="hover:bg-slate-50"
                  data-username="Ramesh Kumar"
                  data-email="ramesh@jewelleryshop.com"
                  data-role="Owner"
                  data-role-id="1"
                  data-status="Active"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gold-700">
                          RK
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          Ramesh Kumar
                        </p>
                        <p className="text-xs text-slate-500">
                          ramesh@jewelleryshop.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                      Owner
                    </span>
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
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Today, 9:30 AM
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
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
