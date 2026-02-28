export default function SignleCustomer() {
  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* <!-- Breadcrumb --> */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <a href="customer-list.html" className="hover:text-gold-600">
            Customers
          </a>
          <span>/</span>
          <span className="text-slate-800">Rajesh Sharma</span>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* <!-- ============================================ 
                     LEFT SECTION - Profile & Stats
                ============================================= -->*/}
          <div className="space-y-6">
            {/* <!-- Profile Card --> */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-semibold text-gold-700">RS</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-800">
                  Rajesh Sharma
                </h2>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                    Active
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span className="text-slate-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="text-slate-700">rajesh.sharma@email.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="text-slate-700">Created: Jan 15, 2022</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex gap-3">
                <button className="flex-1 px-4 py-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-medium rounded-lg transition-colors">
                  Create Invoice
                </button>
                <button
               
                  className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium rounded-lg transition-colors"
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {/* <!-- Customer Stats --> */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Customer Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Total Purchases</span>
                  <span className="text-sm font-semibold text-slate-800">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Total Spent</span>
                  <span className="text-sm font-semibold text-gold-600">
                    ₹18,45,000
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Average Order</span>
                  <span className="text-sm font-semibold text-slate-800">
                    ₹1,53,750
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Last Purchase</span>
                  <span className="text-sm font-semibold text-slate-800">
                    Jan 20, 2024
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Status</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-700">
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Customer Info --> */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Customer Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Customer Name</span>
                  <span className="font-medium text-slate-700">Rajesh Sharma</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Email</span>
                  <span className="font-medium text-slate-700">
                    rajesh.sharma@email.com
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Phone</span>
                  <span className="font-medium text-slate-700">
                    +91 98765 43210
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Status</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-700">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Created At</span>
                  <span className="font-medium text-slate-700">Jan 15, 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ============================================ 
                     RIGHT SECTION - Purchase History
                ============================================= -->*/}
          <div className="xl:col-span-2 space-y-6">
            {/* <!-- Purchase Overview --> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                <p className="text-sm text-slate-500">This Year</p>
                <p className="text-xl font-bold text-slate-800 mt-1">₹4,85,000</p>
                <p className="text-xs text-emerald-600 mt-1">3 purchases</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                <p className="text-sm text-slate-500">Last Year</p>
                <p className="text-xl font-bold text-slate-800 mt-1">₹8,45,000</p>
                <p className="text-xs text-slate-500 mt-1">6 purchases</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                <p className="text-sm text-slate-500">Lifetime</p>
                <p className="text-xl font-bold text-gold-600 mt-1">₹18,45,000</p>
                <p className="text-xs text-slate-500 mt-1">12 purchases</p>
              </div>
            </div>

            {/* <!-- Purchase History Chart Placeholder --> */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-800">
                  Purchase History
                </h3>
                <select className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-gold-500">
                  <option>Last 12 months</option>
                  <option>Last 6 months</option>
                  <option>All time</option>
                </select>
              </div>
              <div className="h-64">
                {/* <canvas
                  id="purchaseHistoryChart"
                  width="644"
                  height="237"
                  style="display: block; box-sizing: border-box; height: 256px; width: 694.6px;"
                ></canvas> */}
              </div>
            </div>

            {/* <!-- Purchase History Table --> */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-lg font-semibold text-slate-800">
                  Recent Purchases
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                        Invoice Number
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                        Sale Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase">
                        Final Amount
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm font-medium text-slate-800">
                        INV-00012
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        Jan 20, 2024
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-800 text-right">
                        ₹1,85,000
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm font-medium text-slate-800">
                        INV-00009
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        Dec 15, 2023
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-800 text-right">
                        ₹1,25,000
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm font-medium text-slate-800">
                        INV-00007
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        Oct 28, 2023
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-800 text-right">
                        ₹1,75,000
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm font-medium text-slate-800">
                        INV-00005
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        Aug 10, 2023
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-800 text-right">
                        ₹85,000
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm font-medium text-slate-800">
                        INV-00003
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        May 22, 2023
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-800 text-right">
                        ₹45,000
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-slate-100 text-center">
                <a
                  href="#"
                  className="text-sm text-gold-600 hover:text-gold-700 font-medium"
                >
                  View All 12 Purchases →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
