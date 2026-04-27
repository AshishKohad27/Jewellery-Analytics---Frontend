import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { GetSummaryAction } from "./summary.action";

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    data: {},
};

const summarySlice = createSlice({
    name: "analyticsSummary",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        addAsyncCases(builder, GetSummaryAction, {
            onFulfilled: (state, payload) => {
                state.data = payload?.data || {};
            },
        });
    },
});

export default summarySlice.reducer;
