import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { CreateJewelleryItem, DeleteJewelleryItem, GetJewelleryItemStats, GetJewelleryItems, UpdateJewelleryItem } from "./jewellery-item.action";

const initialState = {
    loading: false,
    error: false,
    successMessage: "",
    errorMessage: "",
    data: [],
    paramsData: {},
    stats: {},
    isJewelleryItemLoading: false
};

const jewelleryItemSlice = createSlice({
    name: "jewellery-item",
    initialState,
    reducers: {
        toggleInventoryLoading: (state) => {
            state.isJewelleryItemLoading = !state.isJewelleryItemLoading;
        }
    },
    extraReducers: (builder) => {
        // GetJewelleryItems
        addAsyncCases(builder, GetJewelleryItems, {
            onFulfilled: (state, payload) => {
            console.log('payload: ', payload);
                state.data = payload?.data || [];
                state.paramsData = payload?.params || {};
            }
        });

        // GetJewelleryItemStats
        addAsyncCases(builder, GetJewelleryItemStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.stats || {};
            }
        });

        // CreateJewelleryItem
        addAsyncCases(builder, CreateJewelleryItem);

        // UpdateJewelleryItem
        addAsyncCases(builder, UpdateJewelleryItem);

        // DeleteJewelleryItem
        addAsyncCases(builder, DeleteJewelleryItem);
    },
});

export const { toggleInventoryLoading } = jewelleryItemSlice.actions;
export default jewelleryItemSlice.reducer;
