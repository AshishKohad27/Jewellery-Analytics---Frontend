import { configureStore } from '@reduxjs/toolkit'
import testSlice from '@/redux/test/test.slice';
import authSlice from '@/redux/auth/auth.slice';
import analyticsSlice from '@/redux/analytics/analytics.slice';

export const store = configureStore({
    reducer: {
        test: testSlice,
        auth: authSlice,
        analytic: analyticsSlice,
    }
});