"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

let BASE_URL = "/metals";

export const GetMetals = createAsyncThunk(
    "get/metals",
    async (payload, { rejectWithValue }) => {
    console.log('payload: ', payload);
        try {
            const response = await apiClient.get(
                `${BASE_URL}/?search=${payload.search}&page=${payload.page}&limit=${payload.limit}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetMetals",
            );
        }
    },
);

export const GetMetalStats = createAsyncThunk(
    "get/metal/stats",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/stats`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetMetalstats",
            );
        }
    },
);

export const CreateMetal = createAsyncThunk(
    "create/metal",
    async (payload, { rejectWithValue }) => {
    console.log('payload: ', payload)   
        try {
            const response = await apiClient.post(`${BASE_URL}/`, payload.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong CreateMetal",
            );
        }
    },
);

export const UpdateMetal = createAsyncThunk(
    "update/metal",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.put(
                `${BASE_URL}/${payload.metalId}`,
                payload.data,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong UpdateMetal",
            );
        }
    },
);

export const DeleteMetal = createAsyncThunk(
    "delete/metal",
    async (payload, { rejectWithValue }) => {
    console.log('payload: ', payload);
        try {
            const response = await apiClient.delete(
                `${BASE_URL}/${payload.metalId}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong DeleteMetal",
            );
        }
    },
);
