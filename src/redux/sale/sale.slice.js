import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { CreateSale, DeleteSale, GetSaleStats, GetSales, UpdateSale } from "./sale.action";

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    data: [],
    paramsData: {},
    stats: {},
    isSaleLoading: false
};

const saleSlice = createSlice({
    name: "sale",
    initialState,
    reducers: {
        toggleSaleLoading: (state) => {
            state.isSaleLoading = !state.isSaleLoading;
        }
    },
    extraReducers: (builder) => {
        // GetSales
        addAsyncCases(builder, GetSales, {
            onFulfilled: (state, payload) => {
            console.log('GetSales: ', payload);
            
                state.data = payload?.data || [];
                state.paramsData = payload?.params || {};
            }
        });

        // GetSaleStats
        addAsyncCases(builder, GetSaleStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.stats || {};
            }
        });

        // CreateSale
        addAsyncCases(builder, CreateSale);

        // UpdateSale
        addAsyncCases(builder, UpdateSale);

        // DeleteSale
        addAsyncCases(builder, DeleteSale);
    },
});

export const { toggleSaleLoading } = saleSlice.actions;
export default saleSlice.reducer;
