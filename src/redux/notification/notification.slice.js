import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    successMessage: "",
    errorMessage: "",
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setSuccessMessage: (state, action) => {
            state.successMessage = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        clearMessages: (state) => {
            state.successMessage = "";
            state.errorMessage = "";
        },
    },
});

export const { setSuccessMessage, setErrorMessage, clearMessages } = notificationSlice.actions;
export default notificationSlice.reducer;
