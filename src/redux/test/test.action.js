"use client";

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

let BASE_URL = "http://localhost:8080/users";

export const GetTestAction = createAsyncThunk(
    "get/test",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetTestAction"
            )
        }
    }
)