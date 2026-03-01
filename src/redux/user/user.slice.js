import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { CreateUser, DeleteUser, GetUserStats, GetUsers, UpdateUser } from "./user.action";

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    data: [],
    paramsData: {},
    stats: {},
    isUserLoading: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        toggleUserLoading: (state) => {
            state.isUserLoading = !state.isUserLoading;
        }
    },
    extraReducers: (builder) => {
        // GetUsers
        addAsyncCases(builder, GetUsers, {
            onFulfilled: (state, payload) => {
                state.data = payload?.data || [];
                state.paramsData = payload?.params || {};
            }
        });

        // GetUserStats
        addAsyncCases(builder, GetUserStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.stats || {};
            }
        });

        // CreateUser
        addAsyncCases(builder, CreateUser);

        // UpdateUser
        addAsyncCases(builder, UpdateUser);

        // DeleteUser
        addAsyncCases(builder, DeleteUser);
    },
});

export const { toggleUserLoading } = userSlice.actions;
export default userSlice.reducer;
