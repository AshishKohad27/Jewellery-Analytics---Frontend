import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { CreateCustomer, DeleteCustomer, GetCustomerStats, GetCustomers, UpdateCustomer } from "./customer.action";

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    data: [],
    paramsData: {},
    stats: {},
    isCustomerLoading: false
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        toggleCustomerLoading: (state) => {
            state.isCustomerLoading = !state.isCustomerLoading;
        }
    },
    extraReducers: (builder) => {
        // GetCustomers
        addAsyncCases(builder, GetCustomers, {
            onFulfilled: (state, payload) => {
                state.data = payload?.data || [];
                state.paramsData = payload?.params || {};
            }
        });

        // GetCustomerStats
        addAsyncCases(builder, GetCustomerStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.stats || {};
            }
        });

        // CreateCustomer
        addAsyncCases(builder, CreateCustomer);

        // UpdateCustomer
        addAsyncCases(builder, UpdateCustomer);

        // DeleteCustomer
        addAsyncCases(builder, DeleteCustomer);
    },
});

export const { toggleCustomerLoading } = customerSlice.actions;
export default customerSlice.reducer;
