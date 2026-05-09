import apiClient from "@/services/apiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "/analytics/product";

export const GetProductStats = createAsyncThunk(
    "get/product/stats",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/overview`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetProductStats",
            );
        }
    },
);

export const GetCategoryWiseRevenue = createAsyncThunk(
    "get/category/wise/revenue",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/overview`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetCategoryWiseRevenue",
            );
        }
    },
);

export const GetBestSellingProducts = createAsyncThunk(
    "Get/best/selling/products",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/overview`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetBestSellingProducts",
            );
        }
    },
);

export const GetCategorySalesDistribution = createAsyncThunk(
    "get/category/sales/distribution",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/overview`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetCategorySalesDistribution",
            );
        }
    },
);

export const GetPriceRangeDistribution = createAsyncThunk(
    "get/price/range/distribution",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/overview`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetPriceRangeDistribution",
            );
        }
    },
);

export const GetProductsWithoutSales = createAsyncThunk(
    "get/products/without/sales",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/overview`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetProductsWithoutSales",
            );
        }
    },
);

export const GetMonthlyCategorySalesTrend = createAsyncThunk(
    "get/monthly/category/sales/trend",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/overview`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetMonthlyCategorySalesTrend",
            );
        }
    },
);
