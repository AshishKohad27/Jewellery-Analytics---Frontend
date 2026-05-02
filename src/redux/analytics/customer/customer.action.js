import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

const BASE_URL = "/analytics/customer";

export const GetCustomerStats = createAsyncThunk(
    "analytics/customer/stats/get",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/stats`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetCustomerStats",
            );
        }
    },
);
