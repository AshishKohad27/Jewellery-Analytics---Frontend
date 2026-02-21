import { SalesTrendSection, CategoryChart } from "./DashboardCharts";

export default function Dashboard() {
  return (
    <>
      <main className="lg:ml-64 pt-16 min-h-screen">
        <div className="p-4 lg:p-8">
          {/* <!-- Page Header --> */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
            <p className="text-slate-500 mt-1">
              Welcome back! Here's your business overview.
            </p>
          </div>

          {/* <!-- ============================================
                 KPI CARDS
            ============================================= --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {/* <!-- Today's Sales --> */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  +12.5%
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-1">Today's Sales</p>
              <p className="text-2xl font-bold text-slate-800">₹4,52,840</p>
              <p className="text-xs text-slate-400 mt-2">
                vs yesterday ₹4,02,350
              </p>
            </div>

            {/* <!-- Monthly Revenue --> */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  +8.2%
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-1">Monthly Revenue</p>
              <p className="text-2xl font-bold text-slate-800">₹48,25,600</p>
              <p className="text-xs text-slate-400 mt-2">Target: ₹55,00,000</p>
            </div>

            {/* <!-- Inventory Value --> */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gold-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                  854 items
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-1">Inventory Value</p>
              <p className="text-2xl font-bold text-slate-800">₹2.4 Cr</p>
              <p className="text-xs text-slate-400 mt-2">
                Gold: ₹1.8 Cr | Silver: ₹35L | Diamond: ₹25L
              </p>
            </div>

            {/* <!-- Total Customers --> */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  +24 new
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-1">Total Customers</p>
              <p className="text-2xl font-bold text-slate-800">1,284</p>
              <p className="text-xs text-slate-400 mt-2">
                Active this month: 342
              </p>
            </div>
          </div>

          {/* <!-- ============================================
                 CHARTS SECTION
            ============================================= --> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
            <SalesTrendSection />

            {/* <!-- Category-wise Revenue Chart Placeholder --> */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800">
                  Revenue by Category
                </h3>
                <p className="text-sm text-slate-500">
                  Current month breakdown
                </p>
              </div>
              {/* Category Chart */}
              <div className="h-64">
                <CategoryChart />
              </div>
              {/* <!-- Legend --> */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-gold-500 rounded-full"></span>
                    <span className="text-sm text-slate-600">Gold</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    65%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-slate-400 rounded-full"></span>
                    <span className="text-sm text-slate-600">Silver</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    20%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                    <span className="text-sm text-slate-600">Diamond</span>
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    15%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ============================================
                 RECENT SALES TABLE
            ============================================= --> */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Recent Sales
                  </h3>
                  <p className="text-sm text-slate-500">
                    Latest transactions from today
                  </p>
                </div>
                <a
                  href="sales-list.html"
                  className="text-sm text-gold-600 hover:text-gold-700 font-medium flex items-center gap-1"
                >
                  View All
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Invoice
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Items
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-800">
                        #INV-2024-001
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-slate-600">
                            RS
                          </span>
                        </div>
                        <span className="text-sm text-slate-700">
                          Rajesh Sharma
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Gold Necklace Set
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gold-100 text-gold-800">
                        Gold
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-semibold text-slate-800">
                      ₹1,85,000
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-800">
                        #INV-2024-002
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-slate-600">
                            PP
                          </span>
                        </div>
                        <span className="text-sm text-slate-700">
                          Priya Patel
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Diamond Ring
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Diamond
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-semibold text-slate-800">
                      ₹95,500
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-800">
                        #INV-2024-003
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-slate-600">
                            AM
                          </span>
                        </div>
                        <span className="text-sm text-slate-700">
                          Amit Mehta
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Silver Anklet Pair
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                        Silver
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-semibold text-slate-800">
                      ₹12,400
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-800">
                        #INV-2024-004
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-slate-600">
                            SK
                          </span>
                        </div>
                        <span className="text-sm text-slate-700">
                          Sunita Kapoor
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Gold Bangles (4 pcs)
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gold-100 text-gold-800">
                        Gold
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-semibold text-slate-800">
                      ₹1,59,940
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-800">
                        #INV-2024-005
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-slate-600">
                            VG
                          </span>
                        </div>
                        <span className="text-sm text-slate-700">
                          Vikram Gupta
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      Diamond Earrings
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Diamond
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-semibold text-slate-800">
                      ₹78,000
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
