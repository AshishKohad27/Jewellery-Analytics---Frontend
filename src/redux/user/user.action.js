"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

let BASE_URL = "/users";

export const GetUsers = createAsyncThunk(
    "get/users",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(
                `${BASE_URL}/?search=${payload.search}&page=${payload.page}&limit=${payload.limit}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetUsers",
            );
        }
    },
);

export const GetUserStats = createAsyncThunk(
    "get/user/stats",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/stats`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetUserStats",
            );
        }
    },
);

export const CreateUser = createAsyncThunk(
    "create/user",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.post(`${BASE_URL}/`, payload.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong CreateUser",
            );
        }
    },
);

export const UpdateUser = createAsyncThunk(
    "update/user",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.put(
                `${BASE_URL}/${payload.userId}`,
                payload.data,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong UpdateUser",
            );
        }
    },
);

export const DeleteUser = createAsyncThunk(
    "delete/user/",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.delete(
                `${BASE_URL}/${payload.userId}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong DeleteUser",
            );
        }
    },
);
