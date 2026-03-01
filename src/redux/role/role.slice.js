import { createSlice } from "@reduxjs/toolkit";
import { addAsyncCases } from "@/utils/asyncCases";
import { CreateRole, DeleteRole, GetRoles, GetRoleStats, UpdateRole } from "./role.action";


const initialState = {
    loading: true,
    error: false,
    successMessage: "",
    errorMessage: "",
    data: [],
    paramsData: {},
    isRoleLoading: false
};

const roleSlice = createSlice({
    name: "role",
    initialState,
    reducers: {
        toggleRoleLoading: (state) => {
            state.isRoleLoading = !state.isRoleLoading;
        }
    },
    extraReducers: (builder) => {
        // GetRoles
        addAsyncCases(builder, GetRoles, {
            onFulfilled: (state, payload) => {
                state.data = payload?.data || [];
                state.paramsData = payload?.params || {};
            }
        });

        // GetRoleStats
        addAsyncCases(builder, GetRoleStats, {
            onFulfilled: (state, payload) => {
                state.stats = payload?.stats || {};
            }
        });

        // CreateRole
        addAsyncCases(builder, CreateRole);

        // UpdateRole
        addAsyncCases(builder, UpdateRole);

        // DeleteRole
        addAsyncCases(builder, DeleteRole);
    },
});

export const { toggleRoleLoading } = roleSlice.actions;
export default roleSlice.reducer;
