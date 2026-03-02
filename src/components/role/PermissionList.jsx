import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";
import AddRoleDialog from "@/components/dialog/role/AddRoleDialog";
import DelRoleDialog from "@/components/dialog/role/DelRoleDialog";
import EditRoleDialog from "@/components/dialog/role/EditRoleDialog";
import RoleList from "@/components/role/RoleList";
import StatsCardsSkeleton from "@/components/skeleton/StatsCardsSkeleton";
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import { formatDate } from "@/constants/appConfig";
import { getStatusChip } from "@/constants/colorUtils/statusColor";
import { GetRoles, GetRoleStats } from "@/redux/role/role.action";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPermissionDialog from "../dialog/permission/AddPermissionDialog";

export default function PermissionList() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [apiParams, setApiParams] = useState(() => ({
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
    limit: Number(searchParams.get("limit")) || 10,
  }));

  const isFirstRender = useRef(true);

  const { loading, data, paramsData, stats, isRoleLoading } = useSelector(
    (store) => store.role,
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
    dispatch(GetRoles(apiParams));
    dispatch(GetRoleStats());
  }, [apiParams, dispatch, isRoleLoading]);

  useEffect(() => {
    console.log({ loading, data, paramsData, stats, isRoleLoading });
  }, [loading, data, paramsData, stats, isRoleLoading]);

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
        <AddPermissionDialog />
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
      {loading ? (
        <TableSkeleton />
      ) : (
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
                  <td className="px-6 py-4 text-sm font-medium text-  late-800">
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
              </tbody>
            </table>
          </div>
          {/* <!-- Pagination --> */}
          <Pagination
            displayButtons={5}
            total={paramsData?.total}
            onPage={handlePage}
            title="permissions"
          />
        </div>
      )}
    </>
  );
}
