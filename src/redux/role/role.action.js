"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

let BASE_URL = "/roles";

export const GetRoles = createAsyncThunk(
    "get/test",
    async (payload, { rejectWithValue }) => {
        console.log('payload: ', payload);
        try {
            const response = await apiClient.get(`${BASE_URL}/?search=${payload.search}&page=${payload.page}&limit=${payload.limit}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetRoles"
            );
        }
    }
);