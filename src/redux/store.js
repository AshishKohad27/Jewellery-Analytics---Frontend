import { configureStore } from '@reduxjs/toolkit'
import testSlice from '@/redux/test/test.slice';
import authSlice from '@/redux/auth/auth.slice';
import analyticsSlice from '@/redux/analytics/analytics.slice';
import roleSlice from '@/redux/role/role.slice';
import supplierSlice from '@/redux/supplier/supplier.slice';
import metalSlice from '@/redux/metal/metal.slice';
import categorySlice from '@/redux/category/category.slice';
import notificationSlice from '@/redux/notification/notification.slice';
import notificationMiddleware from '@/redux/middleware/notificationMiddleware';

export const store = configureStore({
    reducer: {
        test: testSlice,
        auth: authSlice,
        analytic: analyticsSlice,
        role: roleSlice,
        supplier: supplierSlice,
        metal: metalSlice,
        category: categorySlice,
        notification: notificationSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(notificationMiddleware),
});