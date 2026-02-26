import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { GetSummaryAction } from "./analytics.action";

const initialState = {
    value: 0,
    loading: false,
    error: false,
    successMessage: "",
    errorMessage: "",
    data: [],
    tokens: {},
    tokenDetails: [],
    paramsData: {},
};

const analyticsSlice = createSlice({
    name: "test",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get Summary
        addAsyncCases(builder, GetSummaryAction);
    },
});

export const { } = analyticsSlice.actions;
export default analyticsSlice.reducer;
