"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

let BASE_URL = "/customers";

export const GetCustomers = createAsyncThunk(
    "get/customers",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(
                `${BASE_URL}/?search=${payload.search}&page=${payload.page}&limit=${payload.limit}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetCustomers",
            );
        }
    },
);

export const GetCustomerStats = createAsyncThunk(
    "get/customer/stats",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/stats`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetCustomerStats",
            );
        }
    },
);

export const CreateCustomer = createAsyncThunk(
    "create/customer",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.post(`${BASE_URL}/`, payload.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong CreateCustomer",
            );
        }
    },
);

export const UpdateCustomer = createAsyncThunk(
    "update/customer",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.put(
                `${BASE_URL}/${payload.customerId}`,
                payload.data,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong UpdateCustomer",
            );
        }
    },
);

export const DeleteCustomer = createAsyncThunk(
    "delete/customer",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.delete(
                `${BASE_URL}/${payload.customerId}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong DeleteCustomer",
            );
        }
    },
);
