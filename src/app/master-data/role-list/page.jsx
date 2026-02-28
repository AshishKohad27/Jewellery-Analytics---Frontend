"use client";
import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";
import AddRoleDialog from "@/components/dialog/role/AddRoleDialog";
import DelRoleDialog from "@/components/dialog/role/DelRoleDialog";
import EditRoleDialog from "@/components/dialog/role/EditRoleDialog";
import { formatDate } from "@/constants/appConfig";
import { getStatusChip } from "@/constants/colorUtils/statusColor";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RolesPermissionsLayout() {
  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        <RoleList />
      </div>
    </main>
  );
}

const initialStateParams = {
  search: "",
  page: 1,
  limit: 12,
};

function RoleList() {
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
    <>
      {/* <!-- Page Header --> */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Roles &amp; Permissions
          </h1>
          <p className="text-slate-500 mt-1">
            Manage user roles and access permissions
          </p>
        </div>
        <AddRoleDialog />
      </div>

      {/* <!-- Stats Cards --> */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-1">Total Roles</p>
          <p id="statTotalRoles" className="text-2xl font-bold text-slate-800">
            4
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-1">Active Roles</p>
          <p
            id="statActiveRoles"
            className="text-2xl font-bold text-emerald-600"
          >
            3
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-1">Inactive Roles</p>
          <p id="statInactiveRoles" className="text-2xl font-bold text-red-600">
            1
          </p>
        </div>
      </div>

      {/* <!-- Search --> */}
      <SearchBar
        onSearch={handleSearch}
        placeholder="Search by role name or description..."
      />

      {/* <!-- Roles Table --> */}
      {/* <!-- Schema: roles { id, name, description, isActive, created_by, updated_by, created_at, updated_at, users[], rolePermissions[] } --> */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                  Role Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                  Description
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                  Users Count
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                  Created At
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody id="rolesTableBody" className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-600">1</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  Super Admin
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  Full system access with all permissions
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
                <td className="px-6 py-4 text-sm text-slate-600 text-center">
                  1
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">
                  {formatDate("2026-02-26T16:31:08.763Z")}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      // onClick="openEditRoleModal(1)"
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      // onClick="openDeleteRoleModal(1)"
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                      title="Delete"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>

                    <EditRoleDialog />
                    <DelRoleDialog />
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
          title="roles"
        />
      </div>
    </>
  );
}

function PermissionList() {
  return (
    <>
      {/* <!-- Permissions Section Header --> */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Permissions</h2>
          <p className="text-slate-500 mt-1">
            System permissions grouped by module
          </p>
        </div>
        <button
          // onClick="openAddPermissionModal()"
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
            ></path>
          </svg>
          Add Permission
        </button>
      </div>

      {/* <!-- Permissions Search --> */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 mb-6 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
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
              id="permissionsSearchInput"
              type="text"
              placeholder="Search by permission name or module..."
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* <!-- Permissions Table --> */}
      {/* <!-- Schema: permissions { id, name, module, description, isActive, created_by, updated_by, created_at, updated_at, rolePermissions[] } --> */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                  Permission Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                  Module
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                  Description
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody
              id="permissionsTableBody"
              className="divide-y divide-slate-100"
            >
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-600">1</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  users.create
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">Users</td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  Create new users
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      // onClick="openEditPermissionModal(1)"
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      // onClick="openDeletePermissionModal(1)"
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                      title="Delete"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-600">2</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  users.read
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">Users</td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  View user list
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      // onClick="openEditPermissionModal(2)"
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      // onClick="openDeletePermissionModal(2)"
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                      title="Delete"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-600">3</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  users.update
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">Users</td>
                <td className="px-6 py-4 text-sm text-slate-600">Edit users</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      // onClick="openEditPermissionModal(3)"
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      // onClick="openDeletePermissionModal(3)"
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                      title="Delete"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-600">4</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  users.delete
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">Users</td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  Delete users
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      // onClick="openEditPermissionModal(4)"
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      // onClick="openDeletePermissionModal(4)"
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                      title="Delete"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-600">5</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  sales.create
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">Sales</td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  Create new sales
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      // onClick="openEditPermissionModal(5)"
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      // onClick="openDeletePermissionModal(5)"
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                      title="Delete"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-600">6</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  sales.read
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">Sales</td>
                <td className="px-6 py-4 text-sm text-slate-600">View sales</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      // onClick="openEditPermissionModal(6)"
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      // onClick="openDeletePermissionModal(6)"
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                      title="Delete"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-600">7</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  inventory.create
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">Inventory</td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  Add inventory items
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      // onClick="openEditPermissionModal(7)"
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      // onClick="openDeletePermissionModal(7)"
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                      title="Delete"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-600">8</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  inventory.read
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">Inventory</td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  View inventory
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      // onClick="openEditPermissionModal(8)"
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      // onClick="openDeletePermissionModal(8)"
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                      title="Delete"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-600">9</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  reports.read
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">Reports</td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  View reports
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      // onClick="openEditPermissionModal(9)"
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      // onClick="openDeletePermissionModal(9)"
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                      title="Delete"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 text-sm text-slate-600">10</td>
                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  settings.manage
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">Settings</td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  Manage system settings
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      // onClick="openEditPermissionModal(10)"
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                      title="Edit"
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
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      // onClick="openDeletePermissionModal(10)"
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
                      title="Delete"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Pagination --> */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between">
          <p id="permissionsPaginationInfo" className="text-sm text-slate-500">
            Showing 1-10 of 10 permissions
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
              Previous
            </button>
            <button className="px-3 py-1.5 text-sm bg-gold-500 text-white rounded-lg">
              1
            </button>
            <button className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function PermissionAssignmentMatrix() {
  return (
    <>
      {/* <!-- ======================================== 
                 PERMISSION ASSIGNMENT MATRIX
            ========================================= -->*/}
      <div className="mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Permission Assignment Matrix
            </h2>
            <p className="text-slate-500 mt-1">
              Manage which permissions are assigned to each role. Click
              checkboxes to toggle permissions.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" id="permissionMatrixTable">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Permission Name
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                    <div className="flex flex-col items-center gap-1">
                      <span>Super Admin</span>
                      <label className="flex items-center gap-1 cursor-pointer text-xs text-slate-400 font-normal normal-case">
                        <input
                          type="checkbox"
                          checked=""
                          onchange="toggleSelectAll(1)"
                          className="w-3 h-3 accent-emerald-600"
                        />{" "}
                        Select All
                      </label>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                    <div className="flex flex-col items-center gap-1">
                      <span>Admin</span>
                      <label className="flex items-center gap-1 cursor-pointer text-xs text-slate-400 font-normal normal-case">
                        <input
                          type="checkbox"
                          onchange="toggleSelectAll(2)"
                          className="w-3 h-3 accent-emerald-600"
                        />{" "}
                        Select All
                      </label>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                    <div className="flex flex-col items-center gap-1">
                      <span>Sales Staff</span>
                      <label className="flex items-center gap-1 cursor-pointer text-xs text-slate-400 font-normal normal-case">
                        <input
                          type="checkbox"
                          onchange="toggleSelectAll(3)"
                          className="w-3 h-3 accent-emerald-600"
                        />{" "}
                        Select All
                      </label>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                    <div className="flex flex-col items-center gap-1">
                      <span>Viewer</span>
                      <label className="flex items-center gap-1 cursor-pointer text-xs text-slate-400 font-normal normal-case">
                        <input
                          type="checkbox"
                          onchange="toggleSelectAll(4)"
                          className="w-3 h-3 accent-emerald-600"
                        />{" "}
                        Select All
                      </label>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* <!-- Users Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Users Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    users.create
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    users.read
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    users.update
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    users.delete
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Sales Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Sales Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    sales.create
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    sales.read
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    sales.update
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    sales.delete
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Inventory Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Inventory Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    inventory.create
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    inventory.read
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    inventory.update
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    inventory.delete
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Customers Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Customers Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    customers.create
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    customers.read
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    customers.update
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    customers.delete
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Reports Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Reports Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    reports.view
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    reports.export
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Settings Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Settings Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    settings.read
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    settings.update
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    settings.delete
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Payments Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Payments Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    payments.create
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    payments.read
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    payments.update
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    payments.delete
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Analytics Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Analytics Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    analytics.view
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    analytics.export
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
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
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- Save Changes Button --> */}
          <div className="p-4 border-t border-slate-100 flex justify-end">
            <button
              // onClick="alert('Permission changes saved successfully (demo)')"
              className="px-6 py-2.5 bg-gold-500 text-white hover:bg-gold-600 rounded-lg text-sm font-medium flex items-center gap-2"
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
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
