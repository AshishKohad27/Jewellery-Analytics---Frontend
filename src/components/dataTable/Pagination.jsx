import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function Pagination({
  displayButtons = 3,
  total = { items: 100, pages: 10 },
  limit = 10,
  onPage,
  title = "unknown",
}) {
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();

  useEffect(() => {
    const pageFromUrl = Number(searchParams.get("page")) || 1;
    setPage(pageFromUrl);
  }, [searchParams]);



  const pages = useMemo(() => {
    const half = Math.floor(displayButtons / 2);

    let start = Math.max(1, page - half);
    let end = Math.min(total.pages, start + displayButtons - 1);

    // adjust start if we’re at the end
    start = Math.max(1, end - displayButtons + 1);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [page, total.pages, displayButtons]);

  return (
    <div className="p-4 border-t border-slate-100 flex items-center justify-between">
      <p className="text-sm text-slate-500">
        Showing {(page - 1) * limit + 1}-{Math.min(page * limit, total?.items)}{" "}
        of {total?.items} {title}
      </p>
      <div className="flex items-center gap-2">
        {/* PREVIOUS BUTTON */}
        <button
          onClick={() => {
            const newPage = Math.max(1, page - 1);
            setPage(newPage);
            onPage?.(newPage);
          }}
          disabled={page === 1}
          className="cursor-pointer px-3 py-1.5 text-sm border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50"
        >
          Previous
        </button>

        {/* PAGE BUTTONS */}
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => {
              setPage(p);
              onPage?.(p);
            }}
            className={`cursor-pointer px-3 py-1.5 text-sm ${
              page === p
                ? "bg-gold-500 text-white rounded-lg"
                : "border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50"
            }`}
          >
            {p}
          </button>
        ))}

        {/* NEXT BUTTON */}
        <button
          onClick={() => {
            const newPage = Math.min(total.pages, page + 1);
            setPage(newPage);
            onPage?.(newPage);
          }}
          disabled={total.pages === page}
          className="cursor-pointer px-3 py-1.5 text-sm border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
