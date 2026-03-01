"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

let BASE_URL = "/roles";

export const GetRoles = createAsyncThunk(
    "get/roles",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(
                `${BASE_URL}/?search=${payload.search}&page=${payload.page}&limit=${payload.limit}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetRoles",
            );
        }
    },
);

export const GetRoleStats = createAsyncThunk(
    "get/role/stats",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/stats`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetRoleStats",
            );
        }
    },
);

export const CreateRole = createAsyncThunk(
    "create/role",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.post(`${BASE_URL}/`, payload.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong CreateRole",
            );
        }
    },
);

export const UpdateRole = createAsyncThunk(
    "update/role",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.put(
                `${BASE_URL}/${payload.roleId}`,
                payload.data,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong UpdateRole",
            );
        }
    },
);

export const DeleteRole = createAsyncThunk(
    "delete/role",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.delete(
                `${BASE_URL}/${payload.roleId}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong DeleteRole",
            );
        }
    },
);
