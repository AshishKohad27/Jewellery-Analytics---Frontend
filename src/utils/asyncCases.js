// utils/addAsyncCases.js
export const addAsyncCases = (builder, action, options = {}) => {
    const {
        onFulfilled = (state, payload) => {
            state.data = payload?.data || [];
            state.paramsData = payload?.params || [];
            state.successMessage = payload?.message || "";
        }
    } = options;

    builder
        .addCase(action.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(action.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            onFulfilled(state, action.payload);
        })
        .addCase(action.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.successMessage = "";
            state.errorMessage = action.payload || action.error.message;
        });
};