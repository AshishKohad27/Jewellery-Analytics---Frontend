import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { GetCustomerStats } from "./customer.action";

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    stats: {},
};

const customerAnalyticsSlice = createSlice({
    name: "analyticsCustomer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        addAsyncCases(builder, GetCustomerStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.data || {};
            },
        });
    },
});

export default customerAnalyticsSlice.reducer;
