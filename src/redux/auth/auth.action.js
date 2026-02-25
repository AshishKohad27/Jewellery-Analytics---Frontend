import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080/auth";

export const LoginUserAction = createAsyncThunk(
    "login",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}`, payload);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetTestAction"
            )
        }
    }
);

export const GetRefreshToken = createAsyncThunk(
    "get/refresh/token",
    async (_, { rejectWithValue }) => {
        try {
            let payload = { refreshToken: null };
            if (typeof window !== "undefined") {
                payload.refreshToken = localStorage.getItem("refreshToken");
            }
            const response = await axios.post(`${BASE_URL}/refresh`, payload);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetRefreshToken"
            );
        }
    }
);

export const MeUserAction = createAsyncThunk(
    "get/me",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/me`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetTestAction"
            )
        }
    }
)