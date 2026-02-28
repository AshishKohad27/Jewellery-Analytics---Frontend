import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { GetRoles } from "./role.action";

const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    data: [],
    paramsData: {},
};

const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get Roles
        addAsyncCases(builder, GetRoles);
    },
});

export const { } = roleSlice.actions;
export default roleSlice.reducer;
