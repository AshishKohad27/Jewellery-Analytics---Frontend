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
            rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetTestAction"
            )
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
            rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetTestAction"
            )
        }
    }
)