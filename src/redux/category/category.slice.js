import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { CreateCategory, DeleteCategory, GetCategoryStats, GetCategories, UpdateCategory } from "./category.action";

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    data: [],
    paramsData: {},
    stats: {},
    isCategoryLoading: false
};

const categorySlice = createSlice({
    name: "categoryrole",
    initialState,
    reducers: {
        toggleCategoryLoading: (state) => {
            state.isCategoryLoading = !state.isCategoryLoading;
        }
    },
    extraReducers: (builder) => {
        // GetCategories
        addAsyncCases(builder, GetCategories, {
            onFulfilled: (state, payload) => {
                state.data = payload?.data || [];
                state.paramsData = payload?.params || {};
            }
        });

        // GetCategoryStats
        addAsyncCases(builder, GetCategoryStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.stats || {};
            }
        });

        // CreateCategory
        addAsyncCases(builder, CreateCategory);

        // UpdateCategory
        addAsyncCases(builder, UpdateCategory);

        // DeleteCategory
        addAsyncCases(builder, DeleteCategory);
    },
});

export const { toggleCategoryLoading } = categorySlice.actions;
export default categorySlice.reducer;
