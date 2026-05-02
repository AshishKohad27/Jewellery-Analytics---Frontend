import apiClient from "@/services/apiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "/analytics/staff";

export const GetStaffStats = createAsyncThunk(
    "get/staff/stats/analytics",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/overview`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetStaffStats",
            );
        }
    },
);

export const GetSalesByStaff = createAsyncThunk(
    "get/sales/staff/analytics",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/sales`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetSalesByStaff",
            );
        }
    },
);

export const GetStaffActivityTimeline = createAsyncThunk(
    "get/staff/activity/timeline/analytics",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/activity-timeline`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetStaffActivityTimeline",
            );
        }
    },
);

export const GetStaffPerformance = createAsyncThunk(
    "get/staff/Performance/analytics",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/performance`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetStaffPerformance",
            );
        }
    },
);

export const GetDiscountActionsByStaff = createAsyncThunk(
    "get/staff/Discount/Actions/analytics",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/discount-actions`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetDiscountActionsByStaff",
            );
        }
    },
);

export const GetInventoryActionsByStaff = createAsyncThunk(
    "get/staff/Inventory/Actions/analytics",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/inventory-actions`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetInventoryActionsByStaff",
            );
        }
    },
);