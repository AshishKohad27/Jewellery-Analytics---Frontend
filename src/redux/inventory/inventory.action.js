"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

let BASE_URL = "/inventories";

export const GetInventories = createAsyncThunk(
    "get/inventories",
    async (payload, { rejectWithValue }) => {

        try {
            const response = await apiClient.get(
                `${BASE_URL}/?search=${payload.search}&page=${payload.page}&limit=${payload.limit}`,
            );

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetInventories",
            );
        }
    },
);

export const GetInventoryStats = createAsyncThunk(
    "get/inventory/stats",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/stats`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetInventoryStats",
            );
        }
    },
);

export const CreateInventory = createAsyncThunk(
    "create/inventory",
    async (payload, { rejectWithValue }) => {
        console.log('payload: ', payload)
        try {
            const response = await apiClient.post(`${BASE_URL}/`, payload.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong CreateInventory",
            );
        }
    },
);

export const UpdateInventory = createAsyncThunk(
    "update/inventory",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.put(
                `${BASE_URL}/${payload.InventoryId}`,
                payload.data,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong UpdateInventory",
            );
        }
    },
);

export const DeleteInventory = createAsyncThunk(
    "delete/inventory",
    async (payload, { rejectWithValue }) => {
        console.log('payload: ', payload);
        try {
            const response = await apiClient.delete(
                `${BASE_URL}/${payload.InventoryId}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong DeleteInventory",
            );
        }
    },
);
