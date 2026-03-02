"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

let BASE_URL = "/sales";

export const GetSales = createAsyncThunk(
    "get/sales",
    async (payload, { rejectWithValue }) => {

        try {
            const response = await apiClient.get(
                `${BASE_URL}/?search=${payload?.search}&page=${payload?.page}&limit=${payload?.limit}`,
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetSales",
            );
        }
    },
);

export const GetSaleStats = createAsyncThunk(
    "get/sale/stats",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/stats`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetSaleStats",
            );
        }
    },
);

export const CreateSale = createAsyncThunk(
    "create/sale",
    async (payload, { rejectWithValue }) => {
        console.log('payload: ', payload)
        try {
            const response = await apiClient.post(`${BASE_URL}/`, payload.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong CreateSale",
            );
        }
    },
);

export const UpdateSale = createAsyncThunk(
    "update/sale",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.put(
                `${BASE_URL}/${payload.saleId}`,
                payload.data,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong UpdateSale",
            );
        }
    },
);

export const DeleteSale = createAsyncThunk(
    "delete/sale",
    async (payload, { rejectWithValue }) => {
        console.log('payload: ', payload);
        try {
            const response = await apiClient.delete(
                `${BASE_URL}/${payload.saleId}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong DeleteSale",
            );
        }
    },
);
