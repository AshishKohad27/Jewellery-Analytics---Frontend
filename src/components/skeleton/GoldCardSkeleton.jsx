import { Skeleton } from "@/components/ui/skeleton";

export default function GoldCardSkeleton({
  variant = "table",
  rows = 5,
  columns = 5,
  chartHeight = "h-80",
  showHeader = true,
}) {
  return (
    <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm mb-8">
      {showHeader && (
        <>
          <Skeleton className="h-5 w-56 mb-2" />
          <Skeleton className="h-4 w-80 mb-4" />
        </>
      )}

      {variant === "table" && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gold-50">
                {[...Array(columns)].map((_, i) => (
                  <th
                    key={i}
                    className={`px-4 py-3 ${
                      i === 0
                        ? "text-left rounded-tl-lg"
                        : i === columns - 1
                          ? "text-left rounded-tr-lg"
                          : "text-right"
                    }`}
                  >
                    <Skeleton
                      className={`h-3 w-24 ${i !== 0 && i !== columns - 1 ? "ml-auto" : ""}`}
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[...Array(rows)].map((_, r) => (
                <tr key={r}>
                  {[...Array(columns)].map((_, c) => {
                    const isFirst = c === 0;
                    const isLast = c === columns - 1;
                    return (
                      <td key={c} className="px-4 py-3">
                        {isLast ? (
                          <Skeleton className="h-2 w-full rounded-full" />
                        ) : (
                          <Skeleton
                            className={`h-4 ${isFirst ? "w-32" : "w-12 ml-auto"}`}
                          />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {variant === "chart" && (
        <div className={`${chartHeight} w-full`}>
          <Skeleton className="h-full w-full rounded-lg" />
        </div>
      )}
    </div>
  );
}
