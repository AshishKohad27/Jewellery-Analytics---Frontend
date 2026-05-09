import { createSlice } from "@reduxjs/toolkit";
import {
    GetBestSellingProducts,
    GetCategorySalesDistribution,
    GetCategoryWiseRevenue,
    GetMonthlyCategorySalesTrend,
    GetPriceRangeDistribution,
    GetProductStats,
    GetProductsWithoutSales,
} from "./product.action";

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    stats: {},
    sales: [],
};

const productAnalyticsSlice = createSlice({
    name: "productAnalyticsReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        addAsyncCases(builder, GetProductStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.data || {};
            },
        });

        addAsyncCases(builder, GetCategoryWiseRevenue, {
            onFulfilled: (state, payload) => { },
        });

        addAsyncCases(builder, GetBestSellingProducts, {
            onFulfilled: (state, payload) => { },
        });

        addAsyncCases(builder, GetCategorySalesDistribution, {
            onFulfilled: (state, payload) => { },
        });

        addAsyncCases(builder, GetPriceRangeDistribution, {
            onFulfilled: (state, payload) => { },
        });

        addAsyncCases(builder, GetProductsWithoutSales, {
            onFulfilled: (state, payload) => { },
        });

        addAsyncCases(builder, GetMonthlyCategorySalesTrend, {
            onFulfilled: (state, payload) => { },
        });
    },
});

export default productAnalyticsSlice.reducer;
