"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

let BASE_URL = "/suppliers";

export const GetSuppliers = createAsyncThunk(
    "get/suppliers",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(
                `${BASE_URL}/?search=${payload.search}&page=${payload.page}&limit=${payload.limit}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetSuppliers",
            );
        }
    },
);

export const GetSupplierStats = createAsyncThunk(
    "get/suppliers/stats",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/stats`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetSupplierStats",
            );
        }
    },
);

export const CreateSupplier = createAsyncThunk(
    "create/suppliers",
    async (payload, { rejectWithValue }) => {
    console.log('payload: ', payload);
        try {
            const response = await apiClient.post(`${BASE_URL}/`, payload.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong CreateSupplier",
            );
        }
    },
);

export const UpdateSupplier = createAsyncThunk(
    "update/suppliers",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.put(
                `${BASE_URL}/${payload.supplierId}`,
                payload.data,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong UpdateSupplier",
            );
        }
    },
);

export const DeleteSupplier = createAsyncThunk(
    "delete/suppliers/",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.delete(
                `${BASE_URL}/${payload.supplierId}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong DeleteSupplier",
            );
        }
    },
);
