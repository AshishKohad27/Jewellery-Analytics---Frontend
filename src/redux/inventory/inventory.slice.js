import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { CreateInventory, DeleteInventory, GetInventoryStats, GetInventories, UpdateInventory } from "./inventory.action";

const initialState = {
    loading: false,
    error: false,
    successMessage: "",
    errorMessage: "",
    data: [],
    paramsData: {},
    stats: {},
    isInventoryLoading: false
};

const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        toggleInventoryLoading: (state) => {
            state.isInventoryLoading = !state.isInventoryLoading;
        }
    },
    extraReducers: (builder) => {
        // GetInventories
        addAsyncCases(builder, GetInventories, {
            onFulfilled: (state, payload) => {
            console.log('payload: ', payload);
                state.data = payload?.data || [];
                state.paramsData = payload?.params || {};
            }
        });

        // GetInventoryStats
        addAsyncCases(builder, GetInventoryStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.stats || {};
            }
        });

        // CreateInventory
        addAsyncCases(builder, CreateInventory);

        // UpdateInventory
        addAsyncCases(builder, UpdateInventory);

        // DeleteInventory
        addAsyncCases(builder, DeleteInventory);
    },
});

export const { toggleInventoryLoading } = inventorySlice.actions;
export default inventorySlice.reducer;
