import apiClient from "@/services/apiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "/analytics/supplier";

export const GetSupplierStats = createAsyncThunk(
    "get/supplier/stats",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/overview`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetSupplierStats",
            );
        }
    },
);

export const GetItemsPerSupplier = createAsyncThunk(
    "get/item/per/supplier",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/item-per-supplier`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetItemsPerSupplier",
            );
        }
    },
);

export const GetSupplierRevenueContribution = createAsyncThunk(
    "Gget/supplier/revenue/contribution",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/revenue-contribution`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetSupplierRevenueContribution",
            );
        }
    },
);

export const GetSupplierPerformance = createAsyncThunk(
    "get/supplier/performance",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/performance`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetSupplierPerformance",
            );
        }
    },
);

export const GetItemCategoryDistributionOfSupplier = createAsyncThunk(
    "get/item/category/distribution/of/supplier",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/item-category-distribution`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetItemCategoryDistributionOfSupplier",
            );
        }
    },
);

export const GetCostvsSellingPriceSupplier = createAsyncThunk(
    "get/cost/vs/selling/price/supplier",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/cost-vs-selling-price`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetCostvsSellingPriceSupplier",
            );
        }
    },
);
