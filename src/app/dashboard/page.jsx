import { SalesTrendSection, CategoryChart } from "./DashboardCharts";

export default function Dashboard() {
  return (
    <>
      {/* <!-- ============================================
         TOP NAVBAR
    ============================================= --> */}
      <nav class="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50">
        <div class="flex items-center justify-between h-full px-4 lg:px-6">
          {/* <!-- Logo --> */}
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
              <svg
                class="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <span class="text-lg font-semibold text-slate-800 hidden sm:block">
              Jewellery Analytics
            </span>
          </div>

          {/* <!-- Right Section --> */}
          <div class="flex items-center gap-4">
            {/* <!-- Notifications --> */}
            <button class="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* <!-- User Menu --> */}
            <div class="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div class="w-9 h-9 bg-gold-100 rounded-full flex items-center justify-center">
                <span class="text-gold-700 font-medium text-sm">AD</span>
              </div>
              <div class="hidden sm:block">
                <p class="text-sm font-medium text-slate-700">Admin User</p>
                <p class="text-xs text-slate-500">Administrator</p>
              </div>
              <a
                href="login.html"
                class="ml-2 px-3 py-1.5 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span class="hidden sm:inline">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- ============================================
         SIDEBAR
    ============================================= --> */}
      <aside class="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white border-r border-slate-200 overflow-y-auto hidden lg:block">
        <nav class="p-4 space-y-1">
          {/* <!-- Dashboard - Active --> */}
          <a
            href="dashboard.html"
            class="flex items-center gap-3 px-4 py-3 bg-gold-50 text-gold-700 rounded-lg font-medium"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            Dashboard
          </a>

          {/* <!-- Inventory --> */}
          <a
            href="inventory-list.html"
            class="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            Inventory
          </a>

          {/* <!-- Sales --> */}
          <a
            href="sales-list.html"
            class="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            Sales
          </a>

          {/* <!-- Customers --> */}
          <a
            href="customer-list.html"
            class="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Customers
          </a>

          {/* <!-- Reports --> */}
          <a
            href="reports.html"
            class="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Reports
          </a>

          {/* <!-- Analytics Dropdown --> */}
          <div class="pt-4">
            <p class="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Analytics
            </p>
            <a
              href="analytics-sales.html"
              class="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg text-sm"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
              Sales Analytics
            </a>
            <a
              href="analytics-inventory.html"
              class="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg text-sm"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              Inventory Analytics
            </a>
            <a
              href="analytics-customers.html"
              class="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg text-sm"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              Customer Analytics
            </a>
          </div>

          {/* <!-- Admin Section --> */}
          <div class="pt-4">
            <p class="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Admin
            </p>
            <a
              href="users.html"
              class="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg text-sm"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              User Management
            </a>
            <a
              href="settings.html"
              class="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-50 rounded-lg text-sm"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </a>
          </div>
        </nav>
      </aside>

      {/* <!-- ============================================
         MAIN CONTENT
    ============================================= --> */}
      <main class="lg:ml-64 pt-16 min-h-screen">
        <div class="p-4 lg:p-8">
          {/* <!-- Page Header --> */}
          <div class="mb-8">
            <h1 class="text-2xl font-bold text-slate-800">Dashboard</h1>
            <p class="text-slate-500 mt-1">
              Welcome back! Here's your business overview.
            </p>
          </div>

          {/* <!-- ============================================
                 KPI CARDS
            ============================================= --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            {/* <!-- Today's Sales --> */}
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span class="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full flex items-center gap-1">
                  <svg
                    class="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  +12.5%
                </span>
              </div>
              <p class="text-sm text-slate-500 mb-1">Today's Sales</p>
              <p class="text-2xl font-bold text-slate-800">₹4,52,840</p>
              <p class="text-xs text-slate-400 mt-2">vs yesterday ₹4,02,350</p>
            </div>

            {/* <!-- Monthly Revenue --> */}
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <span class="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full flex items-center gap-1">
                  <svg
                    class="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  +8.2%
                </span>
              </div>
              <p class="text-sm text-slate-500 mb-1">Monthly Revenue</p>
              <p class="text-2xl font-bold text-slate-800">₹48,25,600</p>
              <p class="text-xs text-slate-400 mt-2">Target: ₹55,00,000</p>
            </div>

            {/* <!-- Inventory Value --> */}
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-gold-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <span class="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                  854 items
                </span>
              </div>
              <p class="text-sm text-slate-500 mb-1">Inventory Value</p>
              <p class="text-2xl font-bold text-slate-800">₹2.4 Cr</p>
              <p class="text-xs text-slate-400 mt-2">
                Gold: ₹1.8 Cr | Silver: ₹35L | Diamond: ₹25L
              </p>
            </div>

            {/* <!-- Total Customers --> */}
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <span class="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  +24 new
                </span>
              </div>
              <p class="text-sm text-slate-500 mb-1">Total Customers</p>
              <p class="text-2xl font-bold text-slate-800">1,284</p>
              <p class="text-xs text-slate-400 mt-2">Active this month: 342</p>
            </div>
          </div>

          {/* <!-- ============================================
                 CHARTS SECTION
            ============================================= --> */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
            <SalesTrendSection />

            {/* <!-- Category-wise Revenue Chart Placeholder --> */}
            <div class="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <div class="mb-6">
                <h3 class="text-lg font-semibold text-slate-800">
                  Revenue by Category
                </h3>
                <p class="text-sm text-slate-500">Current month breakdown</p>
              </div>
              {/* Category Chart */}
              <div className="h-64">
                <CategoryChart />
              </div>
              {/* <!-- Legend --> */}
              <div class="mt-4 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 bg-gold-500 rounded-full"></span>
                    <span class="text-sm text-slate-600">Gold</span>
                  </div>
                  <span class="text-sm font-medium text-slate-800">65%</span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 bg-slate-400 rounded-full"></span>
                    <span class="text-sm text-slate-600">Silver</span>
                  </div>
                  <span class="text-sm font-medium text-slate-800">20%</span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 bg-blue-400 rounded-full"></span>
                    <span class="text-sm text-slate-600">Diamond</span>
                  </div>
                  <span class="text-sm font-medium text-slate-800">15%</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ============================================
                 RECENT SALES TABLE
            ============================================= --> */}
          <div class="bg-white rounded-xl shadow-sm border border-slate-100">
            <div class="p-6 border-b border-slate-100">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-lg font-semibold text-slate-800">
                    Recent Sales
                  </h3>
                  <p class="text-sm text-slate-500">
                    Latest transactions from today
                  </p>
                </div>
                <a
                  href="sales-list.html"
                  class="text-sm text-gold-600 hover:text-gold-700 font-medium flex items-center gap-1"
                >
                  View All
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="bg-slate-50">
                    <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Invoice
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Items
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th class="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th class="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr class="hover:bg-slate-50">
                    <td class="px-6 py-4">
                      <span class="text-sm font-medium text-slate-800">
                        #INV-2024-001
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          <span class="text-xs font-medium text-slate-600">
                            RS
                          </span>
                        </div>
                        <span class="text-sm text-slate-700">
                          Rajesh Sharma
                        </span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-slate-600">
                      Gold Necklace Set
                    </td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gold-100 text-gold-800">
                        Gold
                      </span>
                    </td>
                    <td class="px-6 py-4 text-right text-sm font-semibold text-slate-800">
                      ₹1,85,000
                    </td>
                    <td class="px-6 py-4 text-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-6 py-4">
                      <span class="text-sm font-medium text-slate-800">
                        #INV-2024-002
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          <span class="text-xs font-medium text-slate-600">
                            PP
                          </span>
                        </div>
                        <span class="text-sm text-slate-700">Priya Patel</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-slate-600">
                      Diamond Ring
                    </td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Diamond
                      </span>
                    </td>
                    <td class="px-6 py-4 text-right text-sm font-semibold text-slate-800">
                      ₹95,500
                    </td>
                    <td class="px-6 py-4 text-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-6 py-4">
                      <span class="text-sm font-medium text-slate-800">
                        #INV-2024-003
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          <span class="text-xs font-medium text-slate-600">
                            AM
                          </span>
                        </div>
                        <span class="text-sm text-slate-700">Amit Mehta</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-slate-600">
                      Silver Anklet Pair
                    </td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                        Silver
                      </span>
                    </td>
                    <td class="px-6 py-4 text-right text-sm font-semibold text-slate-800">
                      ₹12,400
                    </td>
                    <td class="px-6 py-4 text-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-6 py-4">
                      <span class="text-sm font-medium text-slate-800">
                        #INV-2024-004
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          <span class="text-xs font-medium text-slate-600">
                            SK
                          </span>
                        </div>
                        <span class="text-sm text-slate-700">
                          Sunita Kapoor
                        </span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-slate-600">
                      Gold Bangles (4 pcs)
                    </td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gold-100 text-gold-800">
                        Gold
                      </span>
                    </td>
                    <td class="px-6 py-4 text-right text-sm font-semibold text-slate-800">
                      ₹1,59,940
                    </td>
                    <td class="px-6 py-4 text-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="px-6 py-4">
                      <span class="text-sm font-medium text-slate-800">
                        #INV-2024-005
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          <span class="text-xs font-medium text-slate-600">
                            VG
                          </span>
                        </div>
                        <span class="text-sm text-slate-700">Vikram Gupta</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-slate-600">
                      Diamond Earrings
                    </td>
                    <td class="px-6 py-4">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Diamond
                      </span>
                    </td>
                    <td class="px-6 py-4 text-right text-sm font-semibold text-slate-800">
                      ₹78,000
                    </td>
                    <td class="px-6 py-4 text-center">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
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

      {/* <!-- ============================================
         MOBILE BOTTOM NAVIGATION
    ============================================= --> */}
      <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2">
        <div class="flex items-center justify-around">
          <a
            href="dashboard.html"
            class="flex flex-col items-center gap-1 text-gold-600"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span class="text-xs">Dashboard</span>
          </a>
          <a
            href="inventory-list.html"
            class="flex flex-col items-center gap-1 text-slate-400"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <span class="text-xs">Inventory</span>
          </a>
          <a
            href="sales-list.html"
            class="flex flex-col items-center gap-1 text-slate-400"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span class="text-xs">Sales</span>
          </a>
          <a
            href="customer-list.html"
            class="flex flex-col items-center gap-1 text-slate-400"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span class="text-xs">Customers</span>
          </a>
          <a
            href="settings.html"
            class="flex flex-col items-center gap-1 text-slate-400"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span class="text-xs">More</span>
          </a>
        </div>
      </nav>
    </>
  );
}
