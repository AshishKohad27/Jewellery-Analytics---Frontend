import { createSlice } from '@reduxjs/toolkit';
import { GetTestAction } from './test.action';

const initialState = {
    value: 0,
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
}

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        // Get Test
        builder.addCase(GetTestAction.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(GetTestAction.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.successMessage = action.payload?.message || "";
            state.data = action.payload?.data || [];
            state.paramsData = action.payload?.params || [];
        });
        builder.addCase(GetTestAction.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.successMessage = "";
            state.errorMessage = action.payload || action.error.message;
        });
    }
});

export const { increment, decrement, incrementByAmount } = testSlice.actions
export default testSlice.reducer;