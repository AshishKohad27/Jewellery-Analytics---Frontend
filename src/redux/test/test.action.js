"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

let BASE_URL = "/users";

export const GetTestAction = createAsyncThunk(
    "get/test",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(BASE_URL);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetTestAction"
            );
        }
    }
);