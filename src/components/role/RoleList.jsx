import Pagination from "@/components/dataTable/Pagination";
import SearchBar from "@/components/dataTable/SearchBar";
import AddRoleDialog from "@/components/dialog/role/AddRoleDialog";
import DelRoleDialog from "@/components/dialog/role/DelRoleDialog";
import EditRoleDialog from "@/components/dialog/role/EditRoleDialog";
import StatsCardsSkeleton from "@/components/skeleton/StatsCardsSkeleton";
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import { formatDate } from "@/constants/appConfig";
import { getStatusChip } from "@/constants/colorUtils/statusColor";
import { GetRoles, GetRoleStats } from "@/redux/role/role.action";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RoleList() {
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
      {loading ? (
        <StatsCardsSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Total Roles</p>
            <p
              id="statTotalRoles"
              className="text-2xl font-bold text-slate-800"
            >
              {stats?.total}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Active Roles</p>
            <p
              id="statActiveRoles"
              className="text-2xl font-bold text-emerald-600"
            >
              {stats?.active}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500 mb-1">Inactive Roles</p>
            <p
              id="statInactiveRoles"
              className="text-2xl font-bold text-red-600"
            >
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

      {/* <!-- Roles Table --> */}
      {loading ? (
        <TableSkeleton />
      ) : (
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
                {data?.map((item, index) => (
                  <tr key={item?.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-800">
                      {item?.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {item?.description}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusChip(item.isActive ? "Active" : "Inactive")}`}
                      >
                        {item.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 text-center">
                      {item?._count?.users}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {formatDate(item?.created_at)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <EditRoleDialog roleData={item} />
                        <DelRoleDialog roleData={item} />
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
            title="roles"
          />
        </div>
      )}
    </>
  );
}
