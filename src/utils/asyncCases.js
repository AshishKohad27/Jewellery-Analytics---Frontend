export const addAsyncCases = (builder, action, options = {}) => {
    const {
        onPending,
        onFulfilled,
        onRejected
    } = options;

    builder
        .addCase(action.pending, (state) => {
            state.loading = true;
            state.error = false;

            if (onPending) {
                onPending(state);
            }
        })
        .addCase(action.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.errorMessage = "";
            state.successMessage = action.payload?.message || "";

            if (onFulfilled) {
                onFulfilled(state, action.payload);
            }
        })
        .addCase(action.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.successMessage = "";
            state.errorMessage = action.payload || action.error.message;

            if (onRejected) {
                onRejected(state, action);
            }
        });
};