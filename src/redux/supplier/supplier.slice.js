import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { CreateSupplier, DeleteSupplier, GetSupplierStats, GetSuppliers, UpdateSupplier } from "./supplier.action";

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    data: [],
    paramsData: {},
    stats: {},
    isSupplierLoading: false
};

const supplierSlice = createSlice({
    name: "role",
    initialState,
    reducers: {
        toggleSupplierLoading: (state) => {
            console.log('state: ', state);
            state.isSupplierLoading = !state.isSupplierLoading;
        }
    },
    extraReducers: (builder) => {
        // GetSuppliers
        addAsyncCases(builder, GetSuppliers, {
            onFulfilled: (state, payload) => {
                state.data = payload?.data || [];
                state.paramsData = payload?.params || {};
            }
        });

        // GetSupplierStats
        addAsyncCases(builder, GetSupplierStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.stats || {};
            }
        });

        // CreateSupplier
        addAsyncCases(builder, CreateSupplier);

        // UpdateSupplier
        addAsyncCases(builder, UpdateSupplier);

        // UpdateSupplier
        addAsyncCases(builder, DeleteSupplier);
    },
});

export const { toggleSupplierLoading } = supplierSlice.actions;
export default supplierSlice.reducer;
