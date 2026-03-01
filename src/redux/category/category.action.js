"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

let BASE_URL = "/categories";

export const GetCategories = createAsyncThunk(
    "get/categories",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(
                `${BASE_URL}/?search=${payload.search}&page=${payload.page}&limit=${payload.limit}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetCategories",
            );
        }
    },
);

export const GetCategoryStats = createAsyncThunk(
    "get/categories/stats",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/stats`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetCategoryStats",
            );
        }
    },
);

export const CreateCategory = createAsyncThunk(
    "create/categories",
    async (payload, { rejectWithValue }) => {
        console.log('payload: ', payload);
        try {
            const response = await apiClient.post(`${BASE_URL}/`, payload.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong CreateCategory",
            );
        }
    },
);

export const UpdateCategory = createAsyncThunk(
    "update/categories",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.put(
                `${BASE_URL}/${payload.categoryId}`,
                payload.data,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong UpdateCategory",
            );
        }
    },
);

export const DeleteCategory = createAsyncThunk(
    "delete/categories",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.delete(
                `${BASE_URL}/${payload.categoryId}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong DeleteCategory",
            );
        }
    },
);
