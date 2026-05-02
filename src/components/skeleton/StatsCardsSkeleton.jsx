import { Skeleton } from "@/components/ui/skeleton";
export default function StatsCardsSkeleton({ cards = 3 }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-${cards === 3 ? '3' : '4'} gap-4 lg:gap-6 mb-8`}
    >
      {[...Array(cards)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
        >
          <Skeleton className="h-4 w-28 mb-2" />
          <Skeleton className="h-8 w-16" />
        </div>
      ))}
    </div>
  );
}
