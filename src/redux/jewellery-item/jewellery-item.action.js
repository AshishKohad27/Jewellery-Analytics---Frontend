"use client";

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/services/apiClient";

let BASE_URL = "/jewellery-items";

export const GetJewelleryItemById = createAsyncThunk(
    "get/jewellery-item-id",
    async (payload, { rejectWithValue }) => {
        console.log('payload: ', payload.id);

        try {
            const response = await apiClient.get(
                `${BASE_URL}/${payload?.id}`,
            );
            console.log('response: ', response);

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetJewelleryItems",
            );
        }
    },
);

export const GetJewelleryItems = createAsyncThunk(
    "get/jewellery-items",
    async (payload, { rejectWithValue }) => {
        console.log('payload: ', payload);

        try {
            const response = await apiClient.get(
                `${BASE_URL}/?search=${payload?.search}&page=${payload?.page}&limit=${payload?.limit}`,
            );
            console.log('response: ', response);

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong GetJewelleryItems",
            );
        }
    },
);

export const GetJewelleryItemStats = createAsyncThunk(
    "get/jewellery-item/stats",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiClient.get(`${BASE_URL}/stats`);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message ||
                "Something went wrong GetJewelleryItemStats",
            );
        }
    },
);

export const CreateJewelleryItem = createAsyncThunk(
    "create/jewellery-item",
    async (payload, { rejectWithValue }) => {
        console.log('payload: ', payload)
        try {
            const response = await apiClient.post(`${BASE_URL}/`, payload.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong CreateJewelleryItem",
            );
        }
    },
);

export const UpdateJewelleryItem = createAsyncThunk(
    "update/jewellery-item",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await apiClient.put(
                `${BASE_URL}/${payload.jewelleryItemId}`,
                payload.data,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong UpdateJewelleryItem",
            );
        }
    },
);

export const DeleteJewelleryItem = createAsyncThunk(
    "delete/jewellery-item",
    async (payload, { rejectWithValue }) => {
        console.log('payload: ', payload);
        try {
            const response = await apiClient.delete(
                `${BASE_URL}/${payload.jewelleryItemId}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || "Something went wrong DeleteJewelleryItem",
            );
        }
    },
);
