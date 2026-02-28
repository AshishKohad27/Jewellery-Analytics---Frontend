import { Skeleton } from "@/components/ui/skeleton";

export default function MasterDataSkeleton({ outerContainer = true }) {
  return (
    <main
      className={`${outerContainer ? "lg:ml-64 pt-16 min-h-screen" : null}`}
    >
      <div className={`${outerContainer ? "p-4 lg:p-8" : null}`}>
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="space-y-2">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-4 w-56" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-28 rounded-lg" />
            <Skeleton className="h-10 w-32 rounded-lg" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
            >
              <Skeleton className="h-4 w-28 mb-2" />
              <Skeleton className="h-8 w-16" />
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50">
                  {[...Array(7)].map((_, i) => (
                    <th key={i} className="px-6 py-3">
                      <Skeleton className="h-3 w-20" />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[...Array(5)].map((_, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-8" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-36" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-44" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-32" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Skeleton className="h-5 w-16 rounded-full mx-auto" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-28" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Skeleton className="h-8 w-16 rounded-lg" />
                        <Skeleton className="h-8 w-16 rounded-lg" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
            <Skeleton className="h-4 w-40" />
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-8 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
