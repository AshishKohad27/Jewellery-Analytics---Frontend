export default function PermissionAssignmentMatrix() {
  return (
    <>
      {/* <!-- ======================================== 
                 PERMISSION ASSIGNMENT MATRIX
            ========================================= -->*/}
      <div className="mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Permission Assignment Matrix
            </h2>
            <p className="text-slate-500 mt-1">
              Manage which permissions are assigned to each role. Click
              checkboxes to toggle permissions.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" id="permissionMatrixTable">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Permission Name
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                    <div className="flex flex-col items-center gap-1">
                      <span>Super Admin</span>
                      <label className="flex items-center gap-1 cursor-pointer text-xs text-slate-400 font-normal normal-case">
                        <input
                          type="checkbox"
                          checked=""
                          onchange="toggleSelectAll(1)"
                          className="w-3 h-3 accent-emerald-600"
                        />{" "}
                        Select All
                      </label>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                    <div className="flex flex-col items-center gap-1">
                      <span>Admin</span>
                      <label className="flex items-center gap-1 cursor-pointer text-xs text-slate-400 font-normal normal-case">
                        <input
                          type="checkbox"
                          onchange="toggleSelectAll(2)"
                          className="w-3 h-3 accent-emerald-600"
                        />{" "}
                        Select All
                      </label>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                    <div className="flex flex-col items-center gap-1">
                      <span>Sales Staff</span>
                      <label className="flex items-center gap-1 cursor-pointer text-xs text-slate-400 font-normal normal-case">
                        <input
                          type="checkbox"
                          onchange="toggleSelectAll(3)"
                          className="w-3 h-3 accent-emerald-600"
                        />{" "}
                        Select All
                      </label>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                    <div className="flex flex-col items-center gap-1">
                      <span>Viewer</span>
                      <label className="flex items-center gap-1 cursor-pointer text-xs text-slate-400 font-normal normal-case">
                        <input
                          type="checkbox"
                          onchange="toggleSelectAll(4)"
                          className="w-3 h-3 accent-emerald-600"
                        />{" "}
                        Select All
                      </label>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* <!-- Users Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Users Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    users.create
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    users.read
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    users.update
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    users.delete
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Sales Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Sales Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    sales.create
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    sales.read
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    sales.update
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    sales.delete
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Inventory Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Inventory Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    inventory.create
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    inventory.read
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    inventory.update
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    inventory.delete
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Customers Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Customers Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    customers.create
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    customers.read
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    customers.update
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    customers.delete
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Reports Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Reports Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    reports.view
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    reports.export
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Settings Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Settings Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    settings.read
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    settings.update
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    settings.delete
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Payments Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Payments Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    payments.create
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    payments.read
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    payments.update
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    payments.delete
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Analytics Module --> */}
                <tr className="bg-slate-50">
                  <td
                    colspan="5"
                    className="px-6 py-2 text-sm font-semibold text-slate-700"
                  >
                    Analytics Module
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    analytics.view
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-slate-700 font-mono">
                    analytics.export
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      // onClick="togglePermission(this)"
                      className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mx-auto border border-slate-200"
                    >
                      <span className="w-3 h-3 rounded-full border-2 border-slate-300"></span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- Save Changes Button --> */}
          <div className="p-4 border-t border-slate-100 flex justify-end">
            <button
              // onClick="alert('Permission changes saved successfully (demo)')"
              className="px-6 py-2.5 bg-gold-500 text-white hover:bg-gold-600 rounded-lg text-sm font-medium flex items-center gap-2"
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
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
