import { addAsyncCases } from "@/utils/asyncCases";
import { createSlice } from "@reduxjs/toolkit";
import { GetDiscountActionsByStaff, GetInventoryActionsByStaff, GetSalesByStaff, GetStaffActivityTimeline, GetStaffPerformance, GetStaffStats } from "./staff.action";

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    stats: {},
    sales: [],
    activeTimeLines: [],
    performances: [],
    discounts: [],
    inventory: []
};

const staffAnalyticsSlice = createSlice({
    name: "analyticsStaff",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        addAsyncCases(builder, GetStaffStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.data || {};
            },
        });

        addAsyncCases(builder, GetSalesByStaff, {
            onFulfilled: (state, payload) => {
                state.sales = payload?.data || {};
            },
        });

        addAsyncCases(builder, GetStaffActivityTimeline, {
            onFulfilled: (state, payload) => {
                state.activeTimeLines = payload?.data || {};
            },
        });

        addAsyncCases(builder, GetStaffPerformance, {
            onFulfilled: (state, payload) => {
                state.performances = payload?.data || [];
            },
        });

        addAsyncCases(builder, GetDiscountActionsByStaff, {
            onFulfilled: (state, payload) => {
                state.discounts = payload?.data || [];
            },
        });

        addAsyncCases(builder, GetInventoryActionsByStaff, {
            onFulfilled: (state, payload) => {
                state.inventory = payload?.data || [];
            },
        });
    },
});


export default staffAnalyticsSlice.reducer;
