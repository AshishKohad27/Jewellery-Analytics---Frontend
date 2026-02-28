import { Skeleton } from "@/components/ui/skeleton";
import TableSkeleton from "./TableSkeleton";
import PageHeaderSkeleton from "./PageHeaderSkeleton";
import StatsCardsSkeleton from "./StatsCardsSkeleton";

export default function MasterDataSkeleton({ outerContainer = true }) {
  return (
    <main
      className={`${outerContainer ? "lg:ml-64 pt-16 min-h-screen" : null}`}
    >
      <div className={`${outerContainer ? "p-4 lg:p-8" : null}`}>
        {/* Page Header */}
        <PageHeaderSkeleton />

        {/* Stats Cards */}
        <StatsCardsSkeleton />

        {/* Search Bar */}
        <div className="mb-6">
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>

        {/* Table */}
        <TableSkeleton />
      </div>
    </main>
  );
}
