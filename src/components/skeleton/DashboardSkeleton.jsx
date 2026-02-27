import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeleton() {
  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* Page Header */}
        <div className="mb-8 space-y-2">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-4 w-72" />
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
            >
              <div className="flex items-center justify-between mb-4">
                <Skeleton className="w-12 h-12 rounded-lg" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-8 w-28" />
              <Skeleton className="h-3 w-36 mt-2" />
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {/* Sales Trend Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <div className="mb-6 space-y-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-48" />
            </div>
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>

          {/* Category Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
            <div className="mb-6 space-y-2">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-4 w-44" />
            </div>
            <Skeleton className="h-64 w-full rounded-lg" />
            {/* Legend */}
            <div className="mt-4 space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-3 h-3 rounded-full" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-4 w-8" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Sales Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100">
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-5 w-28" />
                <Skeleton className="h-4 w-48" />
              </div>
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50">
                  {[...Array(6)].map((_, i) => (
                    <th key={i} className="px-6 py-3">
                      <Skeleton className="h-3 w-16" />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[...Array(5)].map((_, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-28" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <Skeleton className="h-4 w-28" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-32" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="h-5 w-16 rounded-full" />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Skeleton className="h-4 w-20 ml-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Skeleton className="h-5 w-20 rounded-full mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
