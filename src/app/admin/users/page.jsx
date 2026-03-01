"use client";
import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";
import AddUserDialog from "@/components/dialog/user/AddUserDialog";
import DelUserDialog from "@/components/dialog/user/DelUserDialog";
import EditUserDialog from "@/components/dialog/user/EditUserDialog";
import StatsCardsSkeleton from "@/components/skeleton/StatsCardsSkeleton";
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import { formatDateTime } from "@/constants/appConfig";
import { getRoleChip } from "@/constants/colorUtils/roleColors";
import { getStatusChip } from "@/constants/colorUtils/statusColor";
import { GetRoles } from "@/redux/role/role.action";
import { GetUsers, GetUserStats } from "@/redux/user/user.action";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Users() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [apiParams, setApiParams] = useState(() => ({
    search: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
    limit: Number(searchParams.get("limit")) || 10,
  }));

  const isFirstRender = useRef(true);

  const { loading, data, paramsData, stats, isUserLoading } = useSelector(
    (store) => store.user,
  );
  const { data: roleData, loading: roleLoading } = useSelector(
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
    dispatch(GetUsers(apiParams));
    dispatch(GetUserStats());
  }, [apiParams, dispatch, isUserLoading]);

  useEffect(() => {
    dispatch(GetRoles());
  }, [dispatch]);

  useEffect(() => {
    console.log({ loading, data, paramsData, stats, isUserLoading });
  }, [loading, data, paramsData, stats, isUserLoading]);

  useEffect(() => {
    console.log({ roleData, roleLoading });
  }, [roleData, roleLoading]);

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
          <AddUserDialog roleData={roleData} />
        </div>

        {/* <!-- Stats Cards --> */}
        {loading ? (
          <StatsCardsSkeleton />
        ) : (
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Total Users</p>
              <p className="text-xl font-bold text-slate-800 mt-1">
                {stats?.total}
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Active Users</p>
              <p className="text-xl font-bold text-emerald-600 mt-1">
                {stats?.active}
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500">Inactive Users</p>
              <p className="text-xl font-bold text-slate-400 mt-1">
                {stats?.inactive}
              </p>
            </div>
          </div>
        )}
        {/* <!-- Search --> */}
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search by role name or description..."
        />

        {/* <!--  Table --> */}
        {loading ? (
          <TableSkeleton />
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                      ID
                    </th>
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
                <tbody
                  id="usersTableBody"
                  className="divide-y divide-slate-100"
                >
                  {data?.map((item, index) => (
                    <tr key={item?.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 ${getRoleChip(item?.role?.name)} rounded-full flex items-center justify-center`}
                          >
                            <span
                              className={`text-sm font-medium ${getRoleChip(item?.role?.name)}`}
                            >
                              {item?.name
                                ?.split(" ")
                                .map((word) => word[0])
                                .join("")
                                .toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-800">
                              {item?.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {item?.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getRoleChip(item?.role?.name)}`}
                        >
                          {item?.role?.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusChip(item.status ? "Active" : "Inactive")}`}
                        >
                          {item.status ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {formatDateTime(item?.last_login)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <EditUserDialog userData={item} roleData={roleData} />
                          <DelUserDialog userData={item} />
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
              title="users"
            />
          </div>
        )}
      </div>
    </main>
  );
}

const initialStateParams = {
  search: "",
  page: 1,
  limit: 12,
};
