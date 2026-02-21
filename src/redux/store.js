import { configureStore } from '@reduxjs/toolkit'
import testSlice from '@/redux/test/test.slice';

export const store = configureStore({
    reducer: {
        test: testSlice,
    }
});