import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { CreateMetal, DeleteMetal, GetMetalStats, GetMetals, UpdateMetal } from "./metal.action";

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    data: [],
    paramsData: {},
    stats: {},
    isMetalLoading: false
};

const metalSlice = createSlice({
    name: "metal",
    initialState,
    reducers: {
        toggleMetalLoading: (state) => {
            state.isMetalLoading = !state.isMetalLoading;
        }
    },
    extraReducers: (builder) => {
        // GetMetals
        addAsyncCases(builder, GetMetals, {
            onFulfilled: (state, payload) => {
                state.data = payload?.data || [];
                state.paramsData = payload?.params || {};
            }
        });

        // GetMetalStats
        addAsyncCases(builder, GetMetalStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.stats || {};
            }
        });

        // CreateMetal
        addAsyncCases(builder, CreateMetal);

        // UpdateMetal
        addAsyncCases(builder, UpdateMetal);

        // UpdateMetal
        addAsyncCases(builder, DeleteMetal);
    },
});

export const { toggleMetalLoading } = metalSlice.actions;
export default metalSlice.reducer;
