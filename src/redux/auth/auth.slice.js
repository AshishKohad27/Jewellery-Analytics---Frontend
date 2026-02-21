import { createSlice } from "@reduxjs/toolkit";
import { LoginUserAction } from "./auth.action";
import axios from "axios";

const initialState = {
    loading: false,
    error: false,
    successMessage: "",
    errorMessage: "",
    isAuth: false,
    data: [],
    tokens: {},
    tokenDetails: [],
    isAuthLoading: false,
    paramsData: {},
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // LOGIN USERS
        builder.addCase(LoginUserAction.pending, (state) => {
            state.loading = true;
            state.error = false;
            state.isAuth = false;
        });
        builder.addCase(LoginUserAction.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;

            const { tokens, data, message } = action.payload;

            state.successMessage = message || "";
            state.data = data;
            state.tokens = tokens;
            state.isAuth = true;

            // Store Token and set in header
            if (typeof window !== "undefined") {

                if (tokens?.accessToken) {
                    localStorage.setItem("accessToken", tokens.accessToken);

                    axios.defaults.headers.common["Authorization"] =
                        `Bearer ${tokens.accessToken}`;
                }

                if (tokens?.refreshToken) {
                    localStorage.setItem("refreshToken", tokens.refreshToken);
                }
            }
        });
        builder.addCase(LoginUserAction.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.successMessage = "";
            state.errorMessage = action.payload || action.error.message;
        });
    },
});
