"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

let BASE_URL = "/analytics";

export const GetSummaryAction = createAsyncThunk(
    "get/test",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/summary`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetSummaryAction"
            );
        }
    }
);