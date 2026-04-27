"use client";

import { formatCurrencyWithComma, formatDate } from "@/constants/appConfig";
import { getStatusChip } from "@/constants/colorUtils/statusColor";
import {
  getTransactionTypeChip,
  getTransactionTypeIcon,
  getTransactionTypeTextColor,
} from "@/constants/colorUtils/transactionType";
import { GetInventoryByJewelleryItemId } from "@/redux/inventory/inventory.action";
import { GetJewelleryItemById } from "@/redux/jewellery-item/jewellery-item.action";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SingleJewellaryItem() {
  const params = useParams();
  const id = params.id;

  const { loading, data, paramsData, stats, isJewelleryItemLoading } =
    useSelector((store) => store.jewellery);
  const { data: inventoryData } = useSelector((store) => store.inventory);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetJewelleryItemById({ id }));
    dispatch(GetInventoryByJewelleryItemId({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    console.log({
      loading,
      data,
      paramsData,
      stats,
      isJewelleryItemLoading,
      inventoryData,
    });
  }, [loading, data, paramsData, stats, isJewelleryItemLoading, inventoryData]);

  return (
    <main className="lg:ml-64 pt-16 min-h-screen">
      <div className="p-4 lg:p-8">
        {/* <!-- Breadcrumb --> */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <a
            href="inventory-list.html"
            className="hover:text-gold-600 transition-colors"
          >
            Inventory
          </a>
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
          <span className="text-slate-800 font-medium">{data?.sku}</span>
        </nav>

        {/* <!-- Item Header --> */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-800">
              Gold Traditional Necklace Set
            </h1>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
              {data?.sku}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusChip(data?.status ? "Active" : "Inactive")}`}
            >
              {data?.status ? "Active" : "Inactive"}
            </span>
          </div>
          <button className="px-4 py-2.5 bg-gold-500 text-white hover:bg-gold-600 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
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
              />
            </svg>
            Edit Item
          </button>
        </div>

        {/* <!-- Item Details Card --> */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">
            Item Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Left Column --> */}
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm text-slate-500">Metal</span>
                <span className="text-sm font-medium text-slate-800">
                  {data?.metal?.metal_name} ({data?.metal?.metal_code})
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm text-slate-500">Category</span>
                <span className="text-sm font-medium text-slate-800">
                  {data?.category?.category_name} (
                  {data?.category?.category_code})
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm text-slate-500">Purity</span>
                <span className="text-sm font-medium text-slate-800">
                  {data?.purity}%
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm text-slate-500">Supplier</span>
                <span className="text-sm font-medium text-slate-800">
                  {data?.supplier?.supplier_name}
                </span>
              </div>
            </div>
            {/* <!-- Right Column --> */}
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm text-slate-500">Cost Price</span>
                <span className="text-sm font-medium text-slate-800">
                  {formatCurrencyWithComma(data?.cost_price)}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm text-slate-500">Selling Price</span>
                <span className="text-sm font-medium text-slate-800">
                  {formatCurrencyWithComma(data?.selling_price)}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm text-slate-500">Profit Margin</span>
                <span className="text-sm font-medium text-emerald-600">
                  27.59%
                </span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-sm text-slate-500">
                  Created / Updated
                </span>
                <span className="text-sm font-medium text-slate-800">
                  {formatDate(data?.created_at)} |{" "}
                  {formatDate(data?.created_at)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Description --> */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">
            Description
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Exquisite traditional gold necklace set featuring intricate temple
            design with matching earrings. Crafted with 22K gold, this set is
            perfect for weddings and festive occasions.
          </p>
        </div>

        {/* <!-- Stock Movement History --> */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-6">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800">
              Stock Movement History
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Type
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase">
                    Qty Change
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase">
                    Weight Change
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {inventoryData?.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {formatDate(item?.transaction_date)}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${getTransactionTypeChip(item?.transaction_type)}`}
                      >
                        {getTransactionTypeIcon(item?.transaction_type)}
                        {item?.transaction_type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-emerald-600 text-right font-medium">
                      <span
                        className={`text-sm font-bold ${getTransactionTypeTextColor(item?.transaction_type)}`}
                      >
                        {item?.transaction_type === "PURCHASE" ||
                        item?.transaction_type === "ADJUSTMENT"
                          ? "+"
                          : ""}
                        {item?.quantity_change}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-emerald-600 text-right font-medium">
                      <span
                        className={`text-sm font-bold ${getTransactionTypeTextColor(item?.transaction_type)}`}
                      >
                        {item?.transaction_type === "PURCHASE" ||
                        item?.transaction_type === "ADJUSTMENT"
                          ? "+"
                          : ""}
                        {item?.weight_change} gm
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {item?.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <!-- Related Sales --> */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-6">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800">
              Related Sales
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Invoice Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase">
                    Weight Sold
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase">
                    Price at Sale
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase">
                    Making Charges
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase">
                    Line Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">
                    INV-00042
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Rajesh Sharma
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 text-right">
                    15.00g
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800 text-right font-medium">
                    &#8377;1,85,000
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 text-right">
                    &#8377;12,500
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800 text-right font-medium">
                    &#8377;1,97,500
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    2024-03-05
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">
                    INV-00041
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Priya Patel
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 text-right">
                    30.00g
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800 text-right font-medium">
                    &#8377;3,70,000
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 text-right">
                    &#8377;25,000
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800 text-right font-medium">
                    &#8377;3,95,000
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    2024-03-08
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">
                    INV-00035
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Amit Kumar
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 text-right">
                    15.00g
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800 text-right font-medium">
                    &#8377;1,82,000
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 text-right">
                    &#8377;11,000
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800 text-right font-medium">
                    &#8377;1,93,000
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    2024-02-15
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-800">
                    INV-00028
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    Sneha Reddy
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 text-right">
                    15.00g
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800 text-right font-medium">
                    &#8377;1,80,000
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 text-right">
                    &#8377;10,500
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-800 text-right font-medium">
                    &#8377;1,90,500
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    2024-01-22
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
