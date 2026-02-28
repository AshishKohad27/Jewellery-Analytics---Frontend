import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar({
  onSearch,
  placeholder,
  outerContainer = true,
}) {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    setSearch(searchQuery || "");
  }, [searchQuery]);

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(search.trim());
    }, 500);
    return () => clearTimeout(timer);
  }, [search, onSearch]);

  return (
    <div
      className={`${outerContainer ? "bg-white rounded-xl shadow-sm border border-slate-100 mb-6 p-4" : null}`}
    >
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
            />
          </svg>
          <input
            id="searchInput"
            type="text"
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
