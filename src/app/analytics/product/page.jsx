"use client";

import {
  CategoryRevenueChart,
  CategorySalesPieChart,
  PriceRangeChart,
  MonthlyCategoryTrendChart,
} from "./ProductCharts";

export default function ProductLayout() {
  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-6 max-w-7xl mx-auto">
        {/* <!-- Page Header --> */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Product &amp; Category Analytics
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Analyze product performance and category trends
          </p>
        </div>

        {/* <!-- KPI Cards --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* <!-- Total Products --> */}
          <div className="bg-white rounded-xl border border-gold-100 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Total Products
              </span>
              <div className="w-9 h-9 bg-gold-50 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gold-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">248</p>
            <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
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
                ></path>
              </svg>
              12 added this month
            </p>
          </div>

          {/* <!-- Total Categories --> */}
          <div className="bg-white rounded-xl border border-gold-100 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Total Categories
              </span>
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">8</p>
            <p className="text-xs text-gray-500 mt-1">All categories active</p>
          </div>

          {/* <!-- Best Selling Product --> */}
          <div className="bg-white rounded-xl border border-gold-100 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Best Selling Product
              </span>
              <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center">
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-lg font-bold text-gray-900">
              Gold Kundan Necklace
            </p>
            <p className="text-xs text-emerald-600 mt-1">142 units sold</p>
          </div>

          {/* <!-- Highest Margin Product --> */}
          <div className="bg-white rounded-xl border border-gold-100 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Highest Margin Product
              </span>
              <div className="w-9 h-9 bg-purple-50 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-lg font-bold text-gray-900">
              Diamond Solitaire Ring
            </p>
            <p className="text-xs text-purple-600 mt-1">
              Margin: 28.5% (₹42,750)
            </p>
          </div>
        </div>

        {/* <!-- Category-wise Revenue Bar Chart --> */}
        <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Category-wise Revenue
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Total revenue generated per product category
          </p>
          <div className="h-80">
            <CategoryRevenueChart />
          </div>
        </div>

        {/* <!-- Top 10 Best Selling Products Table --> */}
        <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Top 10 Best Selling Products
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Products ranked by total revenue generated
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gold-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gold-800 rounded-tl-lg">
                    #
                  </th>
                  <th className="px-4 py-3 font-semibold text-gold-800">SKU</th>
                  <th className="px-4 py-3 font-semibold text-gold-800">
                    Product Name
                  </th>
                  <th className="px-4 py-3 font-semibold text-gold-800">
                    Category
                  </th>
                  <th className="px-4 py-3 font-semibold text-gold-800">
                    Metal
                  </th>
                  <th className="px-4 py-3 font-semibold text-gold-800 text-right">
                    Times Sold
                  </th>
                  <th className="px-4 py-3 font-semibold text-gold-800 text-right">
                    Weight (g)
                  </th>
                  <th className="px-4 py-3 font-semibold text-gold-800 text-right">
                    Revenue
                  </th>
                  <th className="px-4 py-3 font-semibold text-gold-800 text-right rounded-tr-lg">
                    Profit/Unit
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gold-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">1</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    NEC-GK-001
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Gold Kundan Necklace Set
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">
                      Necklaces
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">22K Gold</td>
                  <td className="px-4 py-3 text-right font-medium">142</td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    4,260.0
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                    ₹28,54,000
                  </td>
                  <td className="px-4 py-3 text-right text-emerald-600">
                    ₹4,500
                  </td>
                </tr>
                <tr className="hover:bg-gold-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">2</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    RNG-DS-012
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Diamond Solitaire Ring
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-pink-100 text-pink-700 rounded text-xs">
                      Rings
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">18K White Gold</td>
                  <td className="px-4 py-3 text-right font-medium">89</td>
                  <td className="px-4 py-3 text-right text-gray-600">356.0</td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                    ₹22,25,000
                  </td>
                  <td className="px-4 py-3 text-right text-emerald-600">
                    ₹42,750
                  </td>
                </tr>
                <tr className="hover:bg-gold-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">3</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    BNG-GP-034
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Gold Plain Bangles (Pair)
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs">
                      Bangles
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">22K Gold</td>
                  <td className="px-4 py-3 text-right font-medium">198</td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    7,920.0
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                    ₹19,80,000
                  </td>
                  <td className="px-4 py-3 text-right text-emerald-600">
                    ₹2,200
                  </td>
                </tr>
                <tr className="hover:bg-gold-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">4</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    EAR-JH-007
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Jhumka Earrings Antique
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-violet-100 text-violet-700 rounded text-xs">
                      Earrings
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">22K Gold</td>
                  <td className="px-4 py-3 text-right font-medium">165</td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    2,475.0
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                    ₹16,50,000
                  </td>
                  <td className="px-4 py-3 text-right text-emerald-600">
                    ₹3,800
                  </td>
                </tr>
                <tr className="hover:bg-gold-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">5</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    CHN-GR-021
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Gold Rope Chain 24
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs">
                      Chains
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">22K Gold</td>
                  <td className="px-4 py-3 text-right font-medium">210</td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    5,250.0
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                    ₹14,70,000
                  </td>
                  <td className="px-4 py-3 text-right text-emerald-600">
                    ₹1,850
                  </td>
                </tr>
                <tr className="hover:bg-gold-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">6</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    PND-DH-045
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Diamond Heart Pendant
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-rose-100 text-rose-700 rounded text-xs">
                      Pendants
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">18K Gold</td>
                  <td className="px-4 py-3 text-right font-medium">112</td>
                  <td className="px-4 py-3 text-right text-gray-600">560.0</td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                    ₹11,20,000
                  </td>
                  <td className="px-4 py-3 text-right text-emerald-600">
                    ₹8,500
                  </td>
                </tr>
                <tr className="hover:bg-gold-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">7</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    BRC-GT-018
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Gold Tennis Bracelet
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs">
                      Bracelets
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">18K Gold</td>
                  <td className="px-4 py-3 text-right font-medium">74</td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    1,110.0
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                    ₹9,62,000
                  </td>
                  <td className="px-4 py-3 text-right text-emerald-600">
                    ₹12,300
                  </td>
                </tr>
                <tr className="hover:bg-gold-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">8</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    ANK-SP-029
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Silver Payal Anklet Set
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                      Anklets
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">Sterling Silver</td>
                  <td className="px-4 py-3 text-right font-medium">287</td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    8,610.0
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                    ₹8,61,000
                  </td>
                  <td className="px-4 py-3 text-right text-emerald-600">
                    ₹450
                  </td>
                </tr>
                <tr className="hover:bg-gold-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">9</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    RNG-GE-055
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Gold Engagement Ring
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-pink-100 text-pink-700 rounded text-xs">
                      Rings
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">18K Gold</td>
                  <td className="px-4 py-3 text-right font-medium">96</td>
                  <td className="px-4 py-3 text-right text-gray-600">480.0</td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                    ₹7,68,000
                  </td>
                  <td className="px-4 py-3 text-right text-emerald-600">
                    ₹6,200
                  </td>
                </tr>
                <tr className="hover:bg-gold-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">10</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    NEC-TM-008
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Temple Mangalsutra
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">
                      Necklaces
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">22K Gold</td>
                  <td className="px-4 py-3 text-right font-medium">134</td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    2,680.0
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                    ₹6,70,000
                  </td>
                  <td className="px-4 py-3 text-right text-emerald-600">
                    ₹1,500
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <!-- Charts Row: Pie Chart + Price Range Histogram --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* <!-- Category Sales Distribution Pie Chart --> */}
          <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Category Sales Distribution
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Revenue share by product category
            </p>
            <div className="h-72">
              <CategorySalesPieChart />
            </div>
          </div>

          {/* <!-- Price Range Distribution Histogram --> */}
          <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-1">
              Price Range Distribution
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Number of products in each price bracket
            </p>
            <div className="h-72">
              <PriceRangeChart />
            </div>
          </div>
        </div>

        {/* <!-- Products Without Sales (Dead Stock) --> */}
        <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-lg font-semibold text-gray-900">
              Products Without Sales (Dead Stock)
            </h2>
            <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded-full">
              Attention Needed
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Active products that have never been sold
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-red-50 text-left">
                  <th className="px-4 py-3 font-semibold text-red-800 rounded-tl-lg">
                    #
                  </th>
                  <th className="px-4 py-3 font-semibold text-red-800">SKU</th>
                  <th className="px-4 py-3 font-semibold text-red-800">
                    Product Name
                  </th>
                  <th className="px-4 py-3 font-semibold text-red-800">
                    Category
                  </th>
                  <th className="px-4 py-3 font-semibold text-red-800">
                    Supplier
                  </th>
                  <th className="px-4 py-3 font-semibold text-red-800 text-right">
                    Cost Price
                  </th>
                  <th className="px-4 py-3 font-semibold text-red-800 text-right">
                    Selling Price
                  </th>
                  <th className="px-4 py-3 font-semibold text-red-800 text-right">
                    Added On
                  </th>
                  <th className="px-4 py-3 font-semibold text-red-800 text-right rounded-tr-lg">
                    Days in Stock
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-red-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">1</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    NEC-PL-089
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Platinum Choker Necklace
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">
                      Necklaces
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Rajesh Gold Traders
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    ₹3,85,000
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    ₹4,50,000
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500">
                    2025-06-14
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">
                      266
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-red-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">2</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    BNG-RG-102
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Rose Gold Bangle Heavy
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs">
                      Bangles
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Mehta Jewellers Pvt Ltd
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    ₹1,42,000
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    ₹1,68,000
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500">
                    2025-07-22
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">
                      228
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-red-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">3</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    EAR-DM-067
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Diamond Marquise Earrings
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-violet-100 text-violet-700 rounded text-xs">
                      Earrings
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">Surat Diamond Hub</td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    ₹2,10,000
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    ₹2,75,000
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500">
                    2025-08-05
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">
                      214
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-red-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">4</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    RNG-PT-078
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Platinum Band Ring Men
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-pink-100 text-pink-700 rounded text-xs">
                      Rings
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Kumar Platinum Works
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    ₹48,000
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    ₹62,500
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500">
                    2025-09-18
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs font-medium">
                      170
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-red-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">5</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    PND-RP-091
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Ruby Pear Pendant 18K
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-rose-100 text-rose-700 rounded text-xs">
                      Pendants
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Gemstone India Co.
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    ₹78,000
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    ₹95,000
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500">
                    2025-10-30
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs font-medium">
                      128
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-red-50/50 transition">
                  <td className="px-4 py-3 text-gray-500">6</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-600">
                    BRC-WG-044
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    White Gold Chain Bracelet
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs">
                      Bracelets
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Mehta Jewellers Pvt Ltd
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    ₹56,000
                  </td>
                  <td className="px-4 py-3 text-right text-gray-600">
                    ₹72,000
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500">
                    2025-12-11
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                      86
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <!-- Monthly Category Sales Trend Line Chart --> */}
        <div className="bg-white rounded-xl border border-gold-100 p-6 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Monthly Category Sales Trend
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Revenue trends by category over the last 12 months
          </p>
          <div className="h-96">
            <MonthlyCategoryTrendChart />
          </div>
        </div>
      </div>
    </main>
  );
}
