import { addAsyncCases } from "@/utils/asyncCases";
import { createSlice } from "@reduxjs/toolkit";
import { GetCostvsSellingPriceSupplier, GetItemCategoryDistributionOfSupplier, GetItemsPerSupplier, GetSupplierPerformance, GetSupplierRevenueContribution, GetSupplierStats } from "./supplier.action";

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    stats: {},
    performance: [],
    itemsPerSupplier: [],
    revenue: [],
    itemCategoryDistribution: [],
    costVsSellingPrice: [],
};

const supplierAnalyticsSlice = createSlice({
    name: "supplierAnalyticsReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        addAsyncCases(builder, GetSupplierStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.data || {};
            },
        });

        addAsyncCases(builder, GetItemsPerSupplier, {
            onFulfilled: (state, payload) => {
                state.itemsPerSupplier = payload?.data || [];
            },
        });

        addAsyncCases(builder, GetSupplierRevenueContribution, {
            onFulfilled: (state, payload) => {
                state.revenue = payload?.data || [];
            },
        });

        addAsyncCases(builder, GetSupplierPerformance, {
            onFulfilled: (state, payload) => {
                state.performance = payload?.data || [];
            },
        });

        addAsyncCases(builder, GetItemCategoryDistributionOfSupplier, {
            onFulfilled: (state, payload) => {
                state.itemCategoryDistribution = payload?.data || [];
            },
        });

        addAsyncCases(builder, GetCostvsSellingPriceSupplier, {
            onFulfilled: (state, payload) => {
                state.costVsSellingPrice = payload?.data || [];
            },
        });


    },
});


export default supplierAnalyticsSlice.reducer;
