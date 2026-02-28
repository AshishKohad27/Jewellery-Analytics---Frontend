import { configureStore } from '@reduxjs/toolkit'
import testSlice from '@/redux/test/test.slice';
import authSlice from '@/redux/auth/auth.slice';
import analyticsSlice from '@/redux/analytics/analytics.slice';
import roleSlice from '@/redux/role/role.slice';

export const store = configureStore({
    reducer: {
        test: testSlice,
        auth: authSlice,
        analytic: analyticsSlice,
        role: roleSlice,
    }
});