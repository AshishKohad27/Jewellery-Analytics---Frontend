"use client";

export default function DynamicTable({ data, actions }) {
  if (!data || data.length === 0) {
    return <p className="text-center py-6">No data found</p>;
  }

  const columns = Object.keys(data[0]).filter((key) => key !== "password_hash");

  const renderCell = (value) => {
    if (value === null || value === undefined) return "-";

    if (typeof value === "boolean") {
      return value ? "Active" : "Inactive";
    }

    if (typeof value === "object") {
      return value?.name || JSON.stringify(value);
    }

    // Auto format date
    if (typeof value === "string" && value.includes("T")) {
      const date = new Date(value);
      if (!isNaN(date)) return date.toLocaleDateString();
    }

    return value;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-50">
            {columns.map((col) => (
              <th
                key={col}
                className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase"
              >
                {col.replace(/_/g, " ")}
              </th>
            ))}

            {actions && (
              <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                Actions
              </th>
            )}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-slate-50">
              {columns.map((col) => (
                <td key={col} className="px-6 py-4 text-sm text-slate-600">
                  {renderCell(row[col])}
                </td>
              ))}

              {actions && (
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    {actions.map((action, i) => {
                      if (action?.label === "Edit") {
                        return (
                          <button
                            key={i}
                            onClick={() => action.onClick(row)}
                            className="cursor-pointer p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"
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
                        );
                      } else if (action?.label === "Delete") {
                        return (
                          <button
                            key={i}
                            onClick={() => action.onClick(row)}
                            className="cursor-pointer p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded"
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
                        );
                      }
                    })}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
